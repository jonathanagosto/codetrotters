const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const Region = sequelize.define('regions', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Region.sync({ force: true }).then(() => {
        // Table created
        const regions = [];
        _.times(5, (idx) => {
            regions.push(
                Region.create({
                    name: `Region ${idx + 1}`,
                })
            );
        });

        return regions;
    });
};

module.exports = {
    Region,
    sync,
};
