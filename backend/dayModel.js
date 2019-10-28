const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
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