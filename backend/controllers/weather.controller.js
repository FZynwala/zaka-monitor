const weatherService = require('../services/weather.service');

const postWeather = async (req, res, next) => {
    try {
        await weatherService.postWeather(req.body);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

module.exports = {
    postWeather,
};
