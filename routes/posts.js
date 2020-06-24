const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('LALALOVEYOU');
});

router.get('/specific', (req, res) => {
  res.send('specific post');
});

module.exports = router;
