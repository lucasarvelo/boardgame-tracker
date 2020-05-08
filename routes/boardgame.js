const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bggController = require('../utils/bggApiController');

router.get('/:boardgameId', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const boardgameId = req.params.boardgameId;

  if (isNaN(boardgameId)) return next('Invalid Id');

  const jsonData = await bggController.getBoardgameInformation(boardgameId);

  if (!jsonData)
    return res.status(404).send('Boardgame Not Found! Try another Id.');
  res.send(jsonData);
});

module.exports = router;
