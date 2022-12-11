const sensorModel = require('../models/sensorModel');

const getSensors = async () => {
    const sensors = await sensorModel.Sensor.find({});
    const { a, b } = sensors[0];
    const response = { a, b };

    return response;
};

const postSensor = async (requestBody) => {
    const foundSensor = await sensorModel.Sensor.find({});

    if (!foundSensor) {
        const sensor = new sensorModel.Sensor({
            a: {
                name: requestBody.name1,
                id: '1',
            },
            b: {
                name: requestBody.name2,
                id: '2',
            },
        });

        const result = await sensor.save();

        return result;
    } else {
        const result = await sensorModel.Sensor.findByIdAndUpdate(
            '5e00aedf1ef90926f097c7ff',
            {
                $set: {
                    a: { name: requestBody.name1, id: '1' },
                    b: { name: requestBody.name2, id: '2' },
                },
            },
            { new: true },
        );

        return result;
    }
};

module.exports = {
    getSensors,
    postSensor,
};
