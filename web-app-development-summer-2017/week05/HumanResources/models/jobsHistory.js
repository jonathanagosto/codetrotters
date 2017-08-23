const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const JobsHistory = sequelize.define('jobs_history', {
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(1900, 1, 1, 0, 0, 0, 0),
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    JobsHistory.sync({ force: true }).then(() => {
        // Table created
        const jobsHistories = [];
        _.times(5, () => {
            jobsHistories.push(
                JobsHistory.create({
                    startDate: faker.date.past(),
                    endDate: faker.random.boolean() ? faker.date.recent : new Date(1900, 1, 1, 0, 0, 0, 0),
                })
            );
        });

        return jobsHistories;
    });
};

module.exports = {
    JobsHistory,
    sync,
};
