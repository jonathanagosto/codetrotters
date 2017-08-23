const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const User = sequelize.define('users', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    User.sync({ force: true }).then(() => {
        // Table created
        const users = [];
        _.times(5, () => {
            users.push(
                User.create({
                    fullName: faker.name.findName(),
                    email: faker.internet.email().toLowerCase(),
                })
            );
        });

        return users;
    });
};

module.exports = {
    User,
    sync,
};
