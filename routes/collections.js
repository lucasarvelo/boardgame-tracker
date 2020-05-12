const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');
const Boardgame = require('../models/Boardgame');
const auth = require('../middleware/auth');

/*GET user boardgames collection*/
router.get('/', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const user = req.user;

  if (!user.boardgameCollection === null) {
    Collection.create({ user: user._id }, (error, collection) => {
      user.boardgamesCollection = collection._id;
      user.save((error) => {
        if (error) return next({ error: error });

        res.send(user.boardgamesCollection);
      });
    });
  } else {
    res.send(user.boardgamesCollection.populate('boardgames'));
  }
});

/* POST new game into users collection */
router.post('/addBoardgame', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const userCollection = req.user.boardgameCollection;
  const boardgame = req.body.boardgame;

  Boardgame.create(boardgame, (error, boardgame) => {
    if (error) return next(error);

    userCollection.boardgames.push(boardgame._id);
    userCollection.save((error) => {
      if (error) return next(error);

      res.send(userCollection.populate('boardgames'));
    });
  });
});
module.exports = router;
