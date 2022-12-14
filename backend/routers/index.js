const express = require('express');
const moment = require('moment');
const tz = require('moment-timezone');
require('moment/locale/pl.js');
const dayModel = require('../models/dayModel');
const sensorModel = require('../models/sensorModel');
const { Alert } = require('../models/alertModel');
const { isTopic } = require('../helper_functions/isTopic');
const { createTopic } = require('../helper_functions/createTopic');
const { checkAlert } = require('../helper_functions/checkAlert');
const { sendMessage } = require('../helper_functions/sendMessage');

var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-central-1' });

const router = express.Router();
/*
router.post('/:temp/:humidity/:id', async (req, res) => {
    console.log('Hello fromPOST');
    
    const foundDay = await dayModel.Day.findOne({date: moment(new Date()).tz('Europe/Warsaw').format('l')});
    const sensor = `sensor${req.params.id}`;

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT')
    };
    

    if(!foundDay) {
        console.log('Hello from not foundDay');
        if(sensor === 'sensor01') {
            const day = new dayModel.Day({ 
                sensor01: data,
                date: moment(new Date()).tz('Europe/Warsaw').format('l')
            });
            console.log(`Day: ${day}`);

            try {
                const result = await day.save();
                res.send(result);
            } catch (err) {
                res.send(err);
            };

        } else if(sensor === 'sensor02') {
            const day = new dayModel.Day({ 
                sensor02: data,
                date: moment(new Date()).tz('Europe/Warsaw').format('l')
            });

            try {
                const result = await day.save();
                res.send(result);
            } catch (err) {
                res.send(err);
            };
        }
    } else {
        console.log('Hello from FoundDay')

        let maxTemp = 0;
        let minTemp = 100;

        foundDay[sensor].push(data);

        foundDay[sensor].forEach(obj => {
    
            if(parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = { ...foundDay.maxTemp, [sensor]: {
                    maxTemp: maxTemp,
                    time: obj.time}
                };

            }
            if(parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = { ...foundDay.minTemp, [sensor]: {
                    minTemp: minTemp,
                    time: obj.time}
                };
            }
            
        });

        console.log(foundDay);


        try {
            const result = await foundDay.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    };    

});
*/

router.post('/s01/:temp/:humidity', async (req, res) => {
    console.log('Hello from POST 01');
    const foundDay = await dayModel.Day.findOne({ date: moment(new Date()).tz('Europe/Warsaw').format('l') });

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
    };

    //const alerts = await checkAlert('Gora');
    // console.log(alerts);
    // if (alerts) {
    //     alerts.forEach((alert) => {
    //         if (data[alert.parameter] > alert.value) {
    //             console.log('Sending alert!');
    //             sendMessage(alert, data);
    //         }
    //     });
    // }

    if (!foundDay) {
        console.log('Hello from NOT foundDay');
        const day = new dayModel.Day({
            sensor01: data,
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        try {
            const result = await day.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        console.log('Hello from foundDay');
        let maxTemp = -100;
        let minTemp = 100;

        foundDay.sensor01.push(data);
        console.log('after push');

        foundDay.sensor01.forEach((obj) => {
            if (parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = {
                    ...foundDay.maxTemp,
                    sensor01: {
                        maxTemp: maxTemp,
                        time: obj.time,
                    },
                };
            }
            if (parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = {
                    ...foundDay.minTemp,
                    sensor01: {
                        minTemp: minTemp,
                        time: obj.time,
                    },
                };
            }
        });

        try {
            const result = await foundDay.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
});

router.post('/s02/:temp/:humidity', async (req, res) => {
    console.log('Hello from POST 02');
    const foundDay = await dayModel.Day.findOne({ date: moment(new Date()).tz('Europe/Warsaw').format('l') });

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
    };

    if (!foundDay) {
        console.log('Hello from NOT foundDay');
        const day = new dayModel.Day({
            sensor02: data,
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        try {
            const result = await day.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        console.log('Hello from foundDay');
        let maxTemp = -100;
        let minTemp = 100;

        foundDay.sensor02.push(data);

        foundDay.sensor02.forEach((obj) => {
            if (parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = {
                    ...foundDay.maxTemp,
                    sensor02: {
                        maxTemp: maxTemp,
                        time: obj.time,
                    },
                };
            }
            if (parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = {
                    ...foundDay.minTemp,
                    sensor02: {
                        minTemp: minTemp,
                        time: obj.time,
                    },
                };
            }
        });

        try {
            const result = await foundDay.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
});

router.post('/s03/:temp/:humidity/:door/:light/:tempOut', async (req, res) => {
    console.log('Hello from POST 03');
    const foundDay = await dayModel.Day.findOne({ date: moment(new Date()).tz('Europe/Warsaw').format('l') });

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        isOpen: Boolean(Number(req.params.door)),
        isLight: Boolean(Number(req.params.light)),
        tempOut: req.params.tempOut,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT'),
    };

    if (!foundDay) {
        console.log('Hello from NOT foundDay');
        const day = new dayModel.Day({
            sensor03: data,
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        try {
            const result = await day.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        console.log('Hello from foundDay');
        let maxTempOut = -100;
        let maxTemp = -100;
        let minTempOut = 100;
        let minTemp = 100;

        foundDay.sensor03.push(data);

        foundDay.sensor03.forEach((obj) => {
            if (parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = {
                    ...foundDay.maxTemp,
                    sensor03: {
                        maxTemp: maxTemp,
                        time: obj.time,
                    },
                };
            }
            if (parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = {
                    ...foundDay.minTemp,
                    sensor03: {
                        minTemp: minTemp,
                        time: obj.time,
                    },
                };
            }

            if (parseFloat(obj.tempOut) > parseFloat(maxTempOut)) {
                maxTempOut = obj.tempOut;
                foundDay.maxTemp = {
                    ...foundDay.maxTemp,
                    tempOut: {
                        maxTemp: maxTempOut,
                        time: obj.time,
                    },
                };
            }
            if (parseFloat(obj.tempOut) < parseFloat(minTempOut)) {
                minTempOut = obj.tempOut;
                foundDay.minTemp = {
                    ...foundDay.minTemp,
                    tempOut: {
                        minTemp: minTempOut,
                        time: obj.time,
                    },
                };
            }
        });

        try {
            const result = await foundDay.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    }
});

router.get('/', async (req, res) => {
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

    if (!today) {
        res.status(404).send('There is no data');
    } else {
        res.send(response);
    }
});

router.get('/sensor', async (req, res) => {
    console.log('Hello from SENSOR GET');
    const sensors = await sensorModel.Sensor.find({});
    console.log(sensors);
    const { a, b } = sensors[0];
    const response = { a, b };
    console.log('Response:');
    console.log(response);

    if (!sensors) {
        res.status(404).send('There is no sensors');
    } else {
        res.send(response);
    }
});

router.post('/sensor', async (req, res) => {
    console.log('Hello from SENSOR POST');
    console.log(req.body);

    const foundSensor = await sensorModel.Sensor.find({});
    console.log(foundSensor);

    if (!foundSensor) {
        const sensor = new sensorModel.Sensor({
            a: {
                name: req.body.name1,
                id: '1',
            },
            b: {
                name: req.body.name2,
                id: '2',
            },
        });

        try {
            const result = await sensor.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        const result = await sensorModel.Sensor.findByIdAndUpdate(
            '5e00aedf1ef90926f097c7ff',
            {
                $set: {
                    a: { name: req.body.name1, id: '1' },
                    b: { name: req.body.name2, id: '2' },
                },
            },
            { new: true },
        );
        console.log('result:');
        console.log(result);
        res.send(result);
    }
});

router.post('/notifications', async (req, res) => {
    var params = {
        Message: 'hello from zaka-monitor' /* required */,
        TopicArn: 'arn:aws:sns:eu-central-1:666702137936:temp-alert',
    };

    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();

    publishTextPromise
        .then(function (data) {
            console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
            console.log('MessageID is ' + data.MessageId);
            res.send(params.Message);
        })
        .catch(function (err) {
            console.error(err, err.stack);
        });
});

router.post('/subscribe', async (req, res) => {
    const result = await isTopic(req.body.endpoint);

    if (!result) {
        createTopic(req.body.endpoint);
    }

    const alert = new Alert({
        sensor: req.body.sensor,
        parameter: req.body.param,
        value: req.body.value,
        endpoint: req.body.endpoint,
    });

    try {
        const result = await alert.save();
        res.send(result);
    } catch (err) {
        res.send(err);
    }
});

router.post('/list-subs', async (req, res) => {
    const alerts = await Alert.find();
    res.send(alerts);
});

router.post('/delete-sub', async (req, res) => {
    var deleteTopicPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
        .deleteTopic({ TopicArn: req.body.topic })
        .promise();

    deleteTopicPromise
        .then(function (data) {
            console.log('Topic Deleted');
        })
        .catch(function (err) {
            console.error(err, err.stack);
        });
});

module.exports = router;
