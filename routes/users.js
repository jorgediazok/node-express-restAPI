const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here go the users');
});

router.get('/specificUser', (req, res) => {
  res.send('specific user');
});

module.exports = router;
