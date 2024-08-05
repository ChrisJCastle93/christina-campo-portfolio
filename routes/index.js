const express = require('express');
const router  = express.Router();

/* Serve robots.txt */
router.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nDisallow: /');
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
