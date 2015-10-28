// Function added for compiling and testing purposes just returning true in order to continue
function doThing(callback) {

    callback(true);
}

/*
Issue here is a double call back which causes Done to print out twice.
Also some syntactical errors further on.
Regarding the callback the first callback where err occurs should really see a pass on to some
middleware to handle the error and pause the execution. For now I am returning an Error to
force the execution to stop and exit out correctly.
*/
function foo(callback) {
    doThing(function(err) {
        if (err) return new Error("Error, exiting out");
        // not returning the original (null,err) as the err is handled above
        callback(null);
    });
}

foo(function(err) {

    console.log('Done!');
});

exports.foo = foo;