const Client = require('./client');
const Product = require('./product');
const Order = require('./order');
const Cart = require('./cart');

const models = {
    Client,
    Product,
    Order,
    Cart,
};

const createRelationships = () => {
    const { Client, Order, Cart, Product } = sequelizeModels();
    // One Client / Many Orders
    Client.hasMany(Order);
    Order.belongsTo(Client);

    // One Cart / Many Products
    Cart.hasMany(Product);
    Product.belongsTo(Cart);

    // One Order / One Cart
    Order.hasOne(Cart);
    Cart.belongsTo(Order);
};

const migrateDatabase = () => {
    createRelationships();

    Object.keys(models).forEach((key) => {
        models[key].sync();
    });
};

const sequelizeModels = () => {
    const sequelizeModels = {};
    Object.keys(models).forEach((key) => {
        sequelizeModels[key] = models[key][key];
    });

    return sequelizeModels;
};

module.exports = {
    models: sequelizeModels(),
    migrateDatabase,
};
