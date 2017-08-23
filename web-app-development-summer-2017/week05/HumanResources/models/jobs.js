const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const Job = sequelize.define('jobs', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    minSalary: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
    },
    maxSalary: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Job.sync({ force: true }).then(() => {
        // Table created
        const jobs = [];
        _.times(5, () => {
            const baseSalary = faker.finance.amount();
            jobs.push(
                Job.create({
                    title: faker.name.jobTitle(),
                    minSalary: baseSalary,
                    maxSalary: baseSalary * 1.25,
                })
            );
        });

        return jobs;
    });
};

module.exports = {
    Job,
    sync,
};
