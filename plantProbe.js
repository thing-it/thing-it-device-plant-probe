module.exports = {
    metadata: {
        family: 'plantProbe',
        plugin: 'plantProbe',
        label: 'Plant Probe',
        manufacturer: 'Generic',
        discoverable: false,
        tangible: true,
        additionalSoftware: [],
        actorTypes: [],
        sensorTypes: [],
        state: [{
            id: "height",
            label: "Height",
            type: {
                id: "decimal"
            }
        }, {
            id: "health",
            label: "Health",
            type: {
                id: "integer"
            }
        }],
        services: [],
        configuration: []
    },
    create: function () {
        return new PlantProbe();
    },
    discovery: function () {
        return new PlantMonitorDiscovery();
    }
};

var q = require('q');

function PlantMonitorDiscovery() {
    PlantMonitorDiscovery.prototype.start = function () {
        if (this.node.isSimulated()) {
        } else {
        }
    };

    PlantMonitorDiscovery.prototype.stop = function () {
        if (this.isSimulated()) {
        } else {
        }
    };
}

/**
 *
 * @constructor
 */
function PlantProbe() {
    PlantProbe.prototype.start = function () {
        var deferred = q.defer();

        this.state = {};

        if (this.isSimulated()) {
            deferred.resolve();
        } else {
            if (!this.isSimulated()) {
                // TODO Save to Gateway local storage
            }

            deferred.resolve();
        }

        return deferred.promise;
    };

    /**
     *
     */
    PlantProbe.prototype.stop = function () {
        var deferred = q.defer();

        if (this.isSimulated()) {
        } else {
        }

        deferred.resolve();

        return deferred.promise;
    };

    /**
     *
     */
    PlantProbe.prototype.getState = function () {
        return this.state;
    };

    /**
     *
     */
    PlantProbe.prototype.setState = function (state) {
        if (this.state && this.state.height === state.height && this.state.health === state.health) {
            // identical state, ignoring
            this.logDebug('Ignoring setState invocation as new state is identical to old state');
            return;
        }

        this.state = state;

        if (!this.isSimulated()) {
            // TODO Save to Gateway local storage
            this.publishStateChange();
        }
    };
}