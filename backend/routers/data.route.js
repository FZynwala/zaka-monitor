const express = require('express');
const moment = require('moment');
const tz = require('moment-timezone');
require('moment/locale/pl.js');
const dayModel = require('../models/dayModel');
const sensorModel = require('../models/sensorModel');
const { Alert } = require('../models/alertModel');
const { isTopic } = require('../utils/isTopic');
const { createTopic } = require('../utils/createTopic');
const { checkAlert } = require('../utils/checkAlert');
const { sendMessage } = require('../utils/sendMessage');
const dataController = require('../controllers/data.controller');

var AWS = require('aws-sdk');
AWS.config.update({ region: 'eu-central-1' });

const router = express.Router();

router.post('/s01/:temp/:humidity', dataController.postSensor01Data);

router.post('/s02/:temp/:humidity', dataController.postSensor02Data);

router.post('/s03/:temp/:humidity/:door/:light/:tempOut', dataController.postSensor03Data);

router.get('/', dataController.getData);

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
