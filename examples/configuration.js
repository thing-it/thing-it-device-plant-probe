module.exports = {
    label: "Roof Deck",
    id: "roofDeck",
    autoDiscoveryDeviceTypes: [/*{
        plugin: 'xiaomi-smart-plant-monitor/plantMonitor',
        confirmRegistration: false,
        persistRegistration: false,
        defaultConfiguration: {},
        options: {}
    }*/],
    devices: [{
        label: "Plant Probe Rhododendron",
        id: "plantProbeRhododendron",
        plugin: "plant-probe/plantProbe",
        configuration: {},
        actors: [],
        sensors: []
    }],
    groups: [],
    services: [],
    eventProcessors: [],
    data: []
};
