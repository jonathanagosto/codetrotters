const expect = require('chai').expect;
const generateUserArray = require('../routes/users').generateUserArray;

describe('Users Route', function () {
    describe('#generateUserArray', function () {
        it('should generate a given amount of users', function () {
            const users = generateUserArray(10);

            expect(users).to.have.lengthOf(10);
            users.forEach((user) => {
                expect(user).to.have.property('firstName');
                expect(user).to.have.property('lastName');
                expect(user).to.have.property('username');
                expect(user).to.have.property('email');
            });
        });
    });
});
