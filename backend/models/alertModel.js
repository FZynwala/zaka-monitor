const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    sensor: {
        type: String
    },
    parameter: {
        type: String
    },
    value: {
        type: String
    },
    endpoint: {
        type: String
    }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports.Alert = Alert;