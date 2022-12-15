const dayModel = require('../models/dayModel');
const moment = require('moment');
const tz = require('moment-timezone');
require('moment/locale/pl.js');

const postData = async (req, sensor) => {
    const foundDay = await dayModel.Day.findOne({ date: moment(new Date()).tz('Europe/Warsaw').format('l') });

    const sensorKey = getSensorKey(sensor);

    let data =
        sensorKey === 'sensor03'
            ? {
                  temp: req.params.temp,
                  hum: req.params.humidity,
                  isOpen: Boolean(Number(req.params.door)),
                  isLight: Boolean(Number(req.params.light)),
                  tempOut: req.params.tempOut,
                  time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
              }
            : {
                  temp: req.params.temp,
                  hum: req.params.humidity,
                  time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
              };

    if (!foundDay) {
        const day = new dayModel.Day({
            [sensorKey]: data,
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        await day.save();
    } else {
        foundDay[sensorKey].push(data);

        const { maxTemp, maxTempOut, minTemp, minTempOut } = getMaxMinTemp(foundDay, sensorKey);

        foundDay.maxTemp = {
            ...foundDay.maxTemp,
            [sensorKey]: {
                maxTemp: maxTemp.temp,
                time: maxTemp.time,
            },
        };

        foundDay.minTemp = {
            ...foundDay.minTemp,
            [sensorKey]: {
                minTemp: minTemp.temp,
                time: minTemp.time,
            },
        };

        if (sensorKey === 'sensor3') {
            foundDay.maxTemp = {
                ...foundDay.maxTemp,
                tempOut: {
                    maxTemp: maxTempOut.temp,
                    time: maxTempOut.time,
                },
            };

            foundDay.minTemp = {
                ...foundDay.minTemp,
                tempOut: {
                    minTemp: minTempOut.temp,
                    time: minTempOut.time,
                },
            };
        }

        await foundDay.save();
    }
};

const getData = async () => {
    const yDate = new Date();
    yDate.setDate(yDate.getDate() - 1);

    const today = await dayModel.Day.findOne({ date: moment(new Date()).format('l') });
    const yesterday = await dayModel.Day.findOne({ date: moment(yDate).format('l') });

    if (today && yesterday) {
        var response = {
            today: {
                sensor01: today.sensor01,
                sensor02: today.sensor02,
                sensor03: today.sensor03,
                maxTemp: today.maxTemp,
                minTemp: today.minTemp,
            },
            yesterday: {
                sensor01: yesterday.sensor01,
                sensor02: yesterday.sensor02,
                sensor03: yesterday.sensor03,
                maxTemp: yesterday.maxTemp,
                minTemp: yesterday.minTemp,
            },
        };
    } else if (today) {
        response = {
            today: {
                sensor01: today.sensor01,
                sensor02: today.sensor02,
                sensor03: today.sensor03,
                maxTemp: today.maxTemp,
                minTemp: today.minTemp,
            },
        };
    }

    return response;
};

const getSensorKey = (sensor) => {
    switch (sensor) {
        case 's01':
            return 'sensor01';
        case 's02':
            return 'sensor02';
        case 's03':
            return 'sensor03';
        case 's04':
            return 'sensor04';
        default:
            break;
    }
};

const getMaxMinTemp = (foundDay, sensorKey) => {
    let maxTempOut = {
        temp: -100,
        time: '',
    };
    let maxTemp = {
        temp: -100,
        time: '',
    };
    let minTempOut = {
        temp: 100,
        time: '',
    };
    let minTemp = {
        temp: 100,
        time: '',
    };

    foundDay[sensorKey].forEach((obj) => {
        if (parseFloat(obj.temp) > parseFloat(maxTemp.temp)) {
            maxTemp = { temp: obj.temp, time: obj.time };
        }
        if (parseFloat(obj.temp) < parseFloat(minTemp.temp)) {
            minTemp = { temp: obj.temp, time: obj.time };
        }

        if (sensorKey === 'sensor03') {
            if (parseFloat(obj.tempOut) > parseFloat(maxTempOut.temp)) {
                maxTempOut = { temp: obj.tempOut, time: obj.time };
            }
            if (parseFloat(obj.temp) < parseFloat(minTempOut.temp)) {
                minTempOut = { temp: obj.tempOut, time: obj.time };
            }
        }
    });

    return {
        maxTemp,
        maxTempOut,
        minTemp,
        minTempOut,
    };
};

module.exports = {
    postData,
    getData,
};
