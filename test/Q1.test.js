// Simple test for Q1 using mocha to run the test and using a BDD assertion approach
// Additional Note:
// I would have liked to test the positive side of this (i.e. when an error is not triggered)
// to do that I would need to refator Q1 to pass err in as a paramater and walk
// it down the callback chain. That requires an understanding of what doThing
// actually is. As such I am omitting it but wish to note it here. 

var assert = require('assert');
var Q1 = require('../Q1.js');

describe('foo test', function() {
    it('should return an Error if err is passed in');
});

// declaring it as a simple variable for later reuse
var errorTest = Q1.foo(function(err) {

});

it('should return an Error if err is passed in', function(done) {

    assert.throws(errorTest, Error);
    done();

});