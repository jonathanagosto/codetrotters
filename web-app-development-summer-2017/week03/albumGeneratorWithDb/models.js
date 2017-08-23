const Sequelize = require('sequelize');
const { sequelize } = require('./orm');

const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

const Album = sequelize.define('albums', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

const migrateDatabase = () => {
    // force: true will drop the table if it already exists
    User.sync({ force: true }).then(() => {
        // Table created
        return User.create({
            firstName: 'John',
            lastName: 'Hancock',
        });
    });

    Album.sync({ force: true }).then(() => {
        // Table created
        return Album.create({
            firstName: 'John',
            lastName: 'Hancock',
        });
    });
};

module.exports = {
    User,
    migrateDatabase
};
