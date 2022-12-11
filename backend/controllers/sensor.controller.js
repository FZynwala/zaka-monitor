const sensorsService = require('../services/sensor.service');

const getSensors = async (req, res, next) => {
    try {
        const sensors = await sensorsService.getSensors();
        res.send(sensors);
    } catch (e) {
        res.send(e);
    }
};

const postSensor = async (req, res, next) => {
    try {
        const response = await sensorsService.postSensor(req.body);
        res.send(response);
    } catch (e) {
        res.send(e);
    }
};

module.exports = {
    getSensors,
    postSensor,
};
