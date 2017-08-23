const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const Client = sequelize.define('clients', {
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
    Client.sync({ force: true }).then(() => {
        // Table created
        const clients = [];
        _.times(5, () => {
            clients.push(
                Client.create({
                    fullName: faker.name.findName(),
                    email: faker.internet.email().toLowerCase(),
                })
            );
        });

        return clients;
    });
};

module.exports = {
    Client,
    sync,
};
