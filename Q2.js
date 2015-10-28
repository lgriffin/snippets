/*
Issue here is a timing issue on the callbacks leading to scoping issues when the CB is returned.
My first instinct was to nest the callbacks to force the timing to be correct, however I have opted for
an async approach to it. I would have previously used the Flow library for this. My JavaScript knowledge is
rusty and this might be better achieved using Promises (more functional) with a promise.then approach also viable.
*/
var async = require("async");


function remoteMathService(cb) {

    // The async executes the two functions in the array in parallel
    async.parallel(
        [
            function(callback) {
                callOneService(function(err, num) {
                    callback(null, num);
                });
            },
            function(callback) {
                callTwoService(function(err, num) {
                    callback(null, num);
                });
            },

        ],
        // eventually executed after the parallels all return their callback
        function(err, results) {
            // for consistency I used the same error logic / handling from below
            if (err) console.log("error ", err);
            return cb(undefined, results[0] + results[1]);

        }
    );

}


// I return in 1s
function callOneService(cb) {
    setTimeout(function() {
        return cb(undefined, 1);
    }, 1000);
}

// I return in 1.5s
function callTwoService(cb) {
    setTimeout(function() {
        return cb(undefined, 2);
    }, 1500);
}

// I will return a NaN error because of timing issues
remoteMathService(function(err, answer) {
    if (err) console.log("error ", err);
    if (answer !== 3) {
        console.log("wrong answer", answer);
    } else {
        console.log("correct");
    }
});