const Sequelize = require('sequelize');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const Product = sequelize.define('products', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
    },
});

const sync = () => {
    // force: true will drop the table if it already exists
    Product.sync({ force: true }).then(() => {
        // Table created
        const products = [];
        _.times(10, () => {
            products.push(
                Product.create({
                    name: faker.commerce.productName(),
                    price: faker.commerce.price(),
                })
            );
        });

        return products;
    });
};

module.exports = {
    Product,
    sync,
};
