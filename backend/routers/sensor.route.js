const express = require('express');
const sensorModel = require('../models/sensorModel');
const sensorController = require('../controllers/sensor.controller');

const router = express.Router();

router.get('/', sensorController.getSensors);
router.post('/', sensorController.postSensor);

module.exports = router;
