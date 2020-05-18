const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bggController = require('../utils/bggApiController');

router.get('/top50', auth, async (req, res, next) => {
  if (req.error) return next(req.error);

  const jsonData = await bggController.getHotBoardgames();
  res.send(jsonData);
});

module.exports = router;
