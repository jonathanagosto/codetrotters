const prompt = require('prompt-sync')();
const Human = require('./components/human');

var attrs = {};
attrs.name = prompt('name = ');
attrs.age = parseInt(prompt('age = '));
attrs.sex = prompt('sex = ');

var totalSkills = parseInt(prompt('number of skills = '));

var human = new Human(attrs);

for (var i = 0; i < totalSkills; i++) {
    var skill = prompt((i + 1) + '. skill = ');
    var level = prompt((i + 1) + '. level = ');
    human.learnSkill(skill, level);
}

// human.toJSON();
human.toColoredJSON();
