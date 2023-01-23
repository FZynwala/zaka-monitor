const weatherModel = require('../models/weatherModel');
const moment = require('moment');

const postWeather = async (requestBody) => {
    const foundWeather = await weatherModel.Weather.findOne({
        date: moment(new Date()).tz('Europe/Warsaw').format('l'),
    });

    const windSpeed = {
        windSpeed: requestBody.windSpeed,
        time: moment(new Date()).tz('Europe/Warsaw').format(),
    };

    const windVane = {
        windVane: requestBody.windVane,
        time: moment(new Date()).tz('Europe/Warsaw').format(),
    };

    const rainGauge = {
        rainGauge: requestBody.rainGauge,
        time: moment(new Date()).tz('Europe/Warsaw').format(),
    };

    if (!foundWeather) {
        const weather = new weatherModel.Weather({
            windSpeed: [windSpeed],
            windVane: [windVane],
            rainGauge: [rainGauge],
            date: moment(new Date()).tz('Europe/Warsaw').format('l'),
        });

        const result = await weather.save();

        return result;
    } else {
        foundWeather.windSpeed.push(windSpeed);
        foundWeather.windVane.push(windVane);
        foundWeather.rainGauge.push(rainGauge);

        await foundWeather.save();
    }
};

const getWeather = async () => {
    const weather = await weatherModel.Weather.findOne({ date: moment(new Date()).format('l') });

    return weatherMapper(weather);
};

module.exports = {
    postWeather,
    getWeather,
};

const weatherMapper = (weather) => {
    return {
        windSpeed: weather.windSpeed,
        windVane: weather.windVane,
        rainGauge: weather.rainGauge,
        date: weather.date,
    };
};
