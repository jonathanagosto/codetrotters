const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Country } = require('./countries');

const Location = sequelize.define('locations', {
    streetAddress: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postalCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Location.sync({ force: true }).then(() => {
        // Table created

        Country.findAll().then((countries) => {
            countries.forEach((c) => {
                const locations = [];
                _.times(5, () => {
                    locations.push(
                        c.createLocation({
                            streetAddress: faker.address.streetAddress(),
                            city: faker.address.city(),
                            state: faker.address.state(),
                            postalCode: faker.address.zipCode(),
                        })
                    );
                });
        
                return locations;
            });
        });
    });
};

module.exports = {
    Location,
    sync,
};
