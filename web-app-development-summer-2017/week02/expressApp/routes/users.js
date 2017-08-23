var express = require('express');
var router = express.Router();

const generateUserArray = (userQuantity) => {
  let arr = [];
  for(var i = 0; i < userQuantity; i += 1) {
    arr.push({
      username: 'jonathan.agosto',
      firstName: 'Jonathan',
      lastName: 'Agosto',
      email: 'hello@jonathanagosto.com',
    });
  }

  return arr;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = generateUserArray(15);

  res.render('users', { users });
});

module.exports = {
  router,
  generateUserArray,
};
