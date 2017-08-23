const Country = require('./countries');
const Department = require('./departments');
const Employee = require('./employees');
const Job = require('./jobs');
const JobsHistory = require('./jobsHistory');
const Location = require('./locations');
const Region = require('./regions');
const User = require('./users');

const models = {
    User,
    Region,
    Country,
    Location,
    Department,
    Job,
    Employee,
    JobsHistory,
};

const createRelationships = () => {
    const { Country, Department, Employee, Job, JobsHistory, Location, Region, User } = sequelizeModels();

    // One Region / Many Countries
    Region.hasMany(Country);
    Country.belongsTo(Region);

    // One Country / Many Locations
    Country.hasMany(Location);
    Location.belongsTo(Country);

    // One Location / Many Departments
    Location.hasMany(Department);
    Department.belongsTo(Location);

    // One Department / Many Employees
    Department.hasMany(Employee);
    Employee.belongsTo(Department);

    // One Department / Many JobsHistory
    Department.hasMany(JobsHistory);
    JobsHistory.belongsTo(Department);

    // One Job / Many Employees
    Job.hasMany(Employee);
    Employee.belongsTo(Job);

    // One Job / Many JobsHistory
    Job.hasMany(JobsHistory);
    JobsHistory.belongsTo(Job);

    // One JobHistory / Many Employees
    JobsHistory.hasMany(Employee);
    Employee.belongsTo(JobsHistory);
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
