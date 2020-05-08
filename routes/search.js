const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bggController = require('../utils/bggApiController');

router.get('/:query', auth, async (req, res, next) => {
  if (req.error) return next(req.error);
  const query = req.params.query;

  const jsonData = await bggController.searchBoardgame(query);
  res.send(jsonData);
});

module.exports = router;
