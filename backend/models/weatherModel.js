const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    windSpeed: {
        type: [],
    },
    windVane: {
        type: [],
    },
    rainGauge: {
        type: [],
    },
    date: {
        type: String,
    },
});

const Weather = mongoose.model('Weather', weatherSchema);

module.exports.Weather = Weather;
