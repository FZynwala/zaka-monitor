const mongoose = require('mongoose');
const moment = require("moment");

const userSchema = new mongoose.Schema({
    date: {
        type: String,
        default: moment(new Date()).format('l')
    },
    temp: {
        type: []
    },
    sensorID: {
        type: String,
        required: true
    }
});

const Day = mongoose.model('Day', userSchema);

module.exports.Day = Day;