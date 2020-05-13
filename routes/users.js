const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const secret = process.env.JWT_KEY;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* GET user */
router.get('/', auth, async (req, res, next) => {
  // View logged in user profile
  if (req.error) return next(req.error);

  req.user.populate(
    {
      path: 'boardgamesCollection',
      model: 'Collection',
      populate: {
        path: 'boardgames',
        model: 'Boardgame',
      },
    },
    (error, user) => {
      if (error) return next(error);
      res.send(user);
    },
  );
});

/* POST user registration */
router.post('/register', async (req, res, next) => {
  User.create(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    },
    function (error, user) {
      if (error) {
        return next({
          error:
            error.name === 'MongoError' && error.code === 11000
              ? (error.keyValue.username || error.keyValue.email) +
                ' already exists!'
              : error.errmsg,
        });
      }
      // create a token
      const token = jwt.sign({ id: user._id }, secret, {
        expiresIn: 86400, // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    },
  );
});

/* POST user login*/
router.post('/login', async (req, res, next) => {
  User.findOne({ email: req.body.email }, function (error, user) {
    if (error) return next('Error on the server.');
    if (!user) return next('No user found.');

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password,
    );
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: user._id }, secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
});

/* POST user logout*/
router.post('/logout', auth, async (req, res) => {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;
