const { Alert } = require('../models/alertModel');

const checkAlert = async (sensor) => {
    const alerts = await Alert.find({sensor: sensor});
    return alerts;
};

module.exports.checkAlert = checkAlert;