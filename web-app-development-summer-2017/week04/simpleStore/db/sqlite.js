const Sequelize = require('sequelize');

const sequelize = new Sequelize('albums_db', null, null, {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: '../albums_db.sqlite'
});

module.exports = sequelize;
