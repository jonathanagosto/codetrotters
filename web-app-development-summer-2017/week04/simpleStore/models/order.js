const Sequelize = require('sequelize');
const faker = require('faker');

const { sequelize } = require('../db');

const Order = sequelize.define('orders', {
    subtotal: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
        defaultValue: 0,
    },
    total: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
        defaultValue: 0,
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Order.sync({ force: true }).then(() => {
        // Table created
    });
};

module.exports = {
    Order,
    sync,
};
