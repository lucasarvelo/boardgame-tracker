const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');
const Boardgame = require('../models/Boardgame');
const auth = require('../middleware/auth');

/*GET user boardgames collection*/
router.get('/', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const user = req.user;

  if (!user.boardgamesCollection) {
    return Collection.create({ user: user._id }, (error, collection) => {
      if (error) return next(error);

      user.boardgamesCollection = collection._id;
      user.save((error) => {
        if (error) return next({ error: error });
        console.log('wtf');

        return user.populate('boardgamesCollection', (error, user) => {
          if (error) return next(error);

          res.send(user.boardgamesCollection);
        });
      });
    });
  }

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

      res.send(user.boardgamesCollection);
    },
  );
});

/* POST new game into user collection */
router.post('/boardgame', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const boardgame = req.body;

  /**
   * Update the boardgame, if the boardgame id doesn't exist
   * in the database, a new boardgame will be insert.
   */

  Boardgame.findOneAndUpdate(
    { id: boardgame.id },
    boardgame,
    { upsert: true, setDefaultsOnInsert: true, new: true },
    (error, boardgame) => {
      if (error) return next(error);

      /**
       * Only add boardgame _id to the user collection if doesn's exist
       */

      return req.user.populate('boardgamesCollection', (error, user) => {
        if (error) return next(error);
        const userCollection = user.boardgamesCollection;

        if (!userCollection.boardgames.includes(boardgame._id)) {
          userCollection.boardgames.push(boardgame._id);
          return userCollection.save((error) => {
            if (error) return next(error);

            return userCollection.populate(
              'boardgames',
              (error, collection) => {
                if (error) return next(error);
                res.send(collection);
              },
            );
          });
        }

        userCollection.populate('boardgames', (error, collection) => {
          if (error) return next(error);
          res.send(collection);
        });
      });
    },
  );
});

router.delete('/boardgame', auth, (req, res, next) => {
  if (req.error) return next(req.error);
  const boardgameId = req.body.boardgame_id;

  req.user.populate('boardgamesCollection', (error, user) => {
    if (error) return next(error);
    let userCollection = user.boardgamesCollection;

    userCollection.boardgames = userCollection.boardgames.filter(
      (boardgame) => boardgame._id !== boardgameId,
    );

    user.save((error, user) => {
      if (error) return next(error);

      user.populate(
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
          res.send(user.boardgamesCollection);
        },
      );
    });
  });
});

module.exports = router;
