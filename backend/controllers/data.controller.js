const dataService = require('../services/data.service');

const postSensor01Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's01');
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

const postSensor02Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's02');
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

const postSensor03Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's03');
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

const postSensor04Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's04');
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

const getData = async (req, res, next) => {
    try {
        const response = await dataService.getData();
        res.send(response).status(200);
    } catch (e) {
        res.sendStatus(500).send(e);
    }
};

module.exports = {
    postSensor01Data,
    postSensor02Data,
    postSensor03Data,
    postSensor04Data,
    getData,
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
