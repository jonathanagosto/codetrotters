const Sequelize = require('sequelize');

const sequelize = new Sequelize('human_resources', null, null, {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    // SQLite only
    storage: './human_resources.sqlite'
});

module.exports = sequelize;
