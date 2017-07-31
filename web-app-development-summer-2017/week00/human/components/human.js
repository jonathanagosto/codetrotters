const chalk = require('chalk');

function Human(attrs) {
    attrs = attrs || { name: '', age: -1, sex: '', };
    let name = attrs.name;
    let age = attrs.age;
    let sex = attrs.sex;
    let skills = attrs.skills || {};

    const learnSkill = function (skill, level) {
        // console.log(`Learned skill: ${skill} - ${level}`);
        skills[skill] = level;
        return skills;
    };

    const checkSkill = function (skill) {
        skills[skill];
    };

    const toJSON = function (json) {
        console.log({ name, age, sex, skills, });
    };

    const toColoredJSON = function () {
        console.log({
            name,
            age,
            sex,
            skills,
        });
    };

    return {
        learnSkill,
        checkSkill,
        toJSON,
        toColoredJSON,
    };
}

module.exports = Human;
