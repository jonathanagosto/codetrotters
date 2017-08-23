const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');
const { Department } = require('./departments');

const Employee = sequelize.define('employees', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    hireDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    salary: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,
    },
    comissionPercent: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Employee.sync({ force: true }).then(() => {
        // Table created
        Department.findAll().then((departments) => {
            departments.forEach((d) => {
                const employees = [];
                _.times(5, () => {
                    employees.push(
                        d.createEmployee({
                            fullName: faker.name.findName(),
                            email: faker.internet.email().toLowerCase(),
                            phoneNumber: faker.phone.phoneNumber(),
                            hireDate: faker.date.past(),
                            salary: faker.finance.amount(),
                            comissionPercent: faker.random.number(),
                        })
                    );
                });
        
                return employees;
            });
        });

    });
};

module.exports = {
    Employee,
    sync,
};
