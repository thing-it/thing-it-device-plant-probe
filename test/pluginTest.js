var assert = require("assert");

describe('Thing-it Plant Monitor Probe', function () {
    var testDriver;

    before(function () {
        testDriver = require("thing-it-test").createTestDriver({logLevel: "debug", simulated: false});

        testDriver.registerDevicePlugin('plantProbe', __dirname + "/../plantProbe");
    });
    describe('Start Configuration', function () {
        this.timeout(30000);

        it('should complete without error', function (done) {
            setTimeout(function () {
                done();
            }.bind(this), 5000);

            testDriver.start({
                configuration: require("../examples/configuration.js"),
                heartbeat: 10,
                simulated: false
            });
        });
    });
});





