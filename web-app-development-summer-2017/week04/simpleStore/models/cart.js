const Sequelize = require('sequelize');
const faker = require('faker');

const { sequelize } = require('../db');

const Cart = sequelize.define('carts', {
    subtotal: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
    },
    productsQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Cart.sync({ force: true }).then(() => {
        // Table created
    });
};

module.exports = {
    Cart,
    sync,
};
