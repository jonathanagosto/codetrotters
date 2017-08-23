const express = require('express');
const router = express.Router();

const { Client, Product } = require('../models').models;


/* GET home page. */
router.get('/', function(req, res, next) {
  Client.findAll().then((clients) => {
    Product.findAll().then((products) => {
      res.render('index', { data: {
        clients,
        products,
      }});
    });
  });
});

module.exports = router;
