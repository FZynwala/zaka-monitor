const dataService = require('../services/data.service');

const postSensor01Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's01');
        res.send.status(200);
    } catch (e) {
        res.send(e).status(500);
    }
};

const postSensor02Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's02');
        res.send.status(200);
    } catch (e) {
        res.send(e).status(500);
    }
};

const postSensor03Data = async (req, res, next) => {
    try {
        await dataService.postData(req, 's03');
        res.send.status(200);
    } catch (e) {
        res.send(e).status(500);
    }
};

const getData = async (req, res, next) => {
    try {
        const response = await dataService.getData();
        res.send(response);
    } catch (e) {
        res.send(e).status(500);
    }
};

module.exports = {
    postSensor01Data,
    postSensor02Data,
    postSensor03Data,
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
