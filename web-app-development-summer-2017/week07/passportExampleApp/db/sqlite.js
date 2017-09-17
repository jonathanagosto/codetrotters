const Sequelize = require('sequelize');

const sequelize = new Sequelize('passport_example', null, null, {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: './passport_example.sqlite'
});

module.exports = sequelize;
