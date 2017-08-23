var express = require('express');
var router = express.Router();

const { Client, Order, Cart, Product } = require('../models').models;


/* GET users listing. */
router.post('/', function (req, res, next) {
    const { client: clientId } = req.body;

    Client.findById(parseInt(clientId)).then((client) => {
        Product.findAll({ where: { id: { $in: _getProductIds(req.body) } }}).then((products) => {
            let cartSubtotal = 0;
            products.forEach((product) => {
                cartSubtotal += product.price;
            });

            client.createOrder().then((order) => {
                order.createCart({ subtotal: cartSubtotal, productsQuantity: products.length }).then((cart) => {
                    res.render('cart_detail', {
                        data: { client, order, cart, products, },
                    });
                });
            });
        }).catch((err) => {
            res.send(err);
        });
    }).catch((err) => {
        res.send(err);
    });
});

router.post('/existing', function(req, res, next) {
    const { client: clientId } = req.body;

    Client.findById(parseInt(clientId)).then((client) => {
        Order.findOne({ where: { completed: false } }).then((order) => {
            if (!order) { res.send('No cart was found. Go get some stuff!'); }
            Cart.findOne({ where: { orderId: order.id }, include: [Product] }).then((cart) => {
                res.send({ client, order, cart });
            });
        });
    });
});

const _getProductIds = (obj) => {
    const arr = [];
    Object.keys(obj).forEach((o) => {
        if (o.toLowerCase() !== "client" && parseInt(obj[o]) > 0) {
            arr.push(parseInt(o.substring(o.lastIndexOf('_') + 1))); 
        }
    });

    return arr;
};

module.exports = router;
