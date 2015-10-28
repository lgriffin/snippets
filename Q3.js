/*
For this solution I decided to reuse an open source implementation of an exponential backoff. As an open source
house I hope this is appropriate. I would like to note that this might not be an ideal solution
as the number of dependencies we have to manage increases and thus our footprint increases. We could bring
the additional functions in here from the open source library and house them locally.
*/
// Setting delayRatio to be as minimal as possible for ease of testing, maxTries currently at 10
var backoff = require('oibackoff');
var exponential = backoff.backoff({
    algorithm: 'exponential',
    delayRatio: 0.01,
    maxTries: 10,
});

var counter = 0;
var db = {
        connect: function(cb) {
            console.log('connection attempt', counter + 1);
            if (counter < 9) {
                counter++;
                return cb('db not ready yet');
            }
            return cb();
        }
    };
    // Try to connect, log a successful connection & exit
    // If we fail to connect, log an error and return



exponential(db.connect, function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('successfully connected!');
});