const dayModel = require('../models/dayModel');
const moment = require('moment');
const tz = require('moment-timezone');
require('moment/locale/pl.js');

const postData = async (req, sensor) => {
    const foundDay = await dayModel.Day.findOne({ date: moment(new Date()).tz('Europe/Warsaw').format('l') });

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
    };

    const sensorKey = getSensorKey(sensor);

    if (!foundDay) {
        const day = new dayModel.Day({
            [sensorKey]: data,
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        await day.save();
    } else {
        let maxTemp = 0;
        let minTemp = 100;

        foundDay[sensorKey].push(data);

        foundDay[sensorKey].forEach((obj) => {
            if (parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = {
                    ...foundDay.maxTemp,
                    [sensorKey]: {
                        maxTemp: maxTemp,
                        time: obj.time,
                    },
                };
            }
            if (parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = {
                    ...foundDay.minTemp,
                    [sensorKey]: {
                        minTemp: minTemp,
                        time: obj.time,
                    },
                };
            }
        });

        await foundDay.save();
    }
};

const getSensorKey = (sensor) => {
    switch (sensor) {
        case 's01':
            return 'sensor01';
        case 's02':
            return 'sensor02';
        case 's03':
            return 'sensor03';
        default:
            break;
    }
};

module.exports = {
    postData,
};
