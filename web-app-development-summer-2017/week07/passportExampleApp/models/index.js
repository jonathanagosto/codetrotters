const User = require('./users');

const models = {
    User,
};

const createRelationships = () => {

};

const migrateDatabase = () => {
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

createRelationships();

module.exports = {
    models: sequelizeModels(),
    migrateDatabase,
};
