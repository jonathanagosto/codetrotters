const Sequelize = require('sequelize');
const passport = require('passport');
const _ = require('lodash');
const faker = require('faker');

const { sequelize } = require('../db');

const User = sequelize.define('users', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

User.isValidPassword = (p1, p2) => {
    return p1 === p2;
};

User.serializeUser = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
};

User.deserializeUser = () => {
    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
            user ? done(null,user.get()) : done(user.errors, null);
        });
    });
};

const sync = () => {
    // force: true will drop the table if it already exists
    User.sync({ force: true }).then(() => {
        // Table created
        return User.create({
            fullName: 'John Doe',
            email: 'jdoe@email.com',
            password: '123',
        });
    });
};

module.exports = {
    User,
    sync,
};
