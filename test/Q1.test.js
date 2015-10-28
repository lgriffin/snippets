var assert = require('assert');
var Q1 = require('../Q1.js');

describe('foo test', function() {
    it('should return an Error if err is passed in');
});

var errorTest = Q1.foo(function(err) {

});

var normalTest = Q1.foo();

it('should return an Error if err is passed in', function(done) {

    assert.throws(errorTest, Error);
    done();

});