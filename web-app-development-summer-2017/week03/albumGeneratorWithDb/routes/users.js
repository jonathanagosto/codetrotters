var express = require('express');
var router = express.Router();

const { User } = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll().then((users) => {
    res.render('users_list', { data: users });
  });
});

router.get('/create', function(req, res, next) {
  res.render('users_create');
});

router.post('/create', function(req, res, next) {
  const { firstName, lastName } = req.body;
  User.create({ firstName, lastName }).then((user) => {
    res.render('users_details', { data: user });
  });

});

module.exports = router;
