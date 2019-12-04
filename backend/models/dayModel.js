const mongoose = require('mongoose');
const moment = require("moment");

const userSchema = new mongoose.Schema({
    date: {
        type: String,
        default: moment(new Date()).format('l')
    },
    sensorA: {
        type: []
    },
    sensorB: {
        type: []
    }
});

const Day = mongoose.model('Day', userSchema);

module.exports.Day = Day;