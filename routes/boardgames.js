const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bggController = require('../utils/bggApiController');

router.get('/:boardgameIds', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const boardgameIds = req.params.boardgameIds;

  const jsonData = await bggController.getBoardgameInformation(boardgameIds);

  if (!jsonData)
    return res.status(404).send('Boardgame Not Found! Try another Id.');
  res.send(jsonData);
});

module.exports = router;
