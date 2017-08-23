const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Region } = require('./regions');

const Country = sequelize.define('countries', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Country.sync({ force: true }).then(() => {
        // Table created
        Region.findAll().then((regions) => {
            regions.forEach((r) => {
                const countries = [];
                _.times(5, () => {
                    countries.push(
                        r.createCountry({
                            name: faker.address.country(),
                        })
                    );
                });
    
                return countries;
            });
        });
    });
};

module.exports = {
    Country,
    sync,
};
