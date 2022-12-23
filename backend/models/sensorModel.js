const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    a: {},
    b: {},
    c: {},
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports.Sensor = Sensor;
