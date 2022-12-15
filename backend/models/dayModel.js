const mongoose = require('mongoose');
const moment = require('moment');

const userSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    sensor01: {
        type: [],
    },
    sensor02: {
        type: [],
    },
    sensor03: {
        type: [],
    },
    sensor04: {
        type: [],
    },
    maxTemp: {
        type: {},
    },
    minTemp: {
        type: {},
    },
});

const Day = mongoose.model('Day', userSchema);

module.exports.Day = Day;
