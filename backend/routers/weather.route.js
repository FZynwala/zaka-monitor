const express = require('express');
const weatherController = require('../controllers/weather.controller');

const router = express.Router();

router.post('/', weatherController.postWeather);

module.exports = router;
