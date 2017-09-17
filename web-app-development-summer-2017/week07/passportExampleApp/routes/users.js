const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.user) { res.redirect('/login'); }
  res.render('users_profile', { data: req.user });
});

module.exports = router;
