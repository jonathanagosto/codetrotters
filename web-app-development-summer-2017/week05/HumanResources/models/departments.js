const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Location } = require('./locations');

const Department = sequelize.define('departments', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Department.sync({ force: true }).then(() => {
        // Table created
        Location.findAll().then((locations) => {
            locations.forEach((l) => {
                const departments = [];
                _.times(5, () => {
                    departments.push(
                        l.createDepartment({
                            name: `${faker.company.bsNoun()} Department`,
                        })
                    );
                });
        
                return departments;
            });
        });

    });
};

module.exports = {
    Department,
    sync,
};
