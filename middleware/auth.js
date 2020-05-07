const jwt = require('jsonwebtoken');
const User = require('../models/User');
const secret = process.env.JWT_KEY;

const auth = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    req.error = { auth: false, message: 'No token provided.' };
    return next();
  }

  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      req.error = { auth: false, message: 'Failed to authenticate token.' };
      return next();
    }

    User.findById(decoded.id, function (err, user) {
      if (err) {
        req.error = 'There was a problem finding the user.';
        return next();
      }
      if (!user) {
        req.error = 'No user found.';
        return next();
      }

      req.user = user;
      req.token = token;
      return next();
    });
  });
};

module.exports = auth;
