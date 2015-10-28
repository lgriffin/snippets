// Simple test for Q2 using mocha to run the test and using a BDD assertion approach
var assert = require('assert');
// note that due to how the Q2 file is setup it will call remoteMathService
// immediately after being included. This is how the snippet is designed as it is a snippet by nature
var Q2 = require('../Q2.js');

// Testing the three main functions
describe('Maths test', function() {
    it('should return a 1 from CallOneService');
    it('should return a 2 from CallTwoService');
    it('should return a 3 from remoteMathService');
});

// This should expect 1 to be returned from the function
it('should return a 1 from CallOneService', function(done) {

    Q2.callOneService(function(err, num) {

        assert.equal(num, 1);
        done();
    });


});

// This should expect 2 to be returned from the function
it('should return a 2 from CallTwoService', function(done) {

    Q2.callTwoService(function(err, num) {

        assert.equal(num, 2);
        done();
    });


});

// This should expect 3 to be returned from the function
it('should return a 3 from remoteMathService', function(done) {

    Q2.remoteMathService(function(err, answer) {

        assert.equal(answer, 3);
        done();
    });


});