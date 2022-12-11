const express = require('express');
const sensorModel = require('../models/sensorModel');
const sensorController = require('../controllers/sensor.controller');

const router = express.Router();

router.get('/', sensorController.getSensors);

router.post('/', async (req, res) => {
    const foundSensor = await sensorModel.Sensor.find({});

    if (!foundSensor) {
        const sensor = new sensorModel.Sensor({
            a: {
                name: req.body.name1,
                id: '1',
            },
            b: {
                name: req.body.name2,
                id: '2',
            },
        });

        try {
            const result = await sensor.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    } else {
        const result = await sensorModel.Sensor.findByIdAndUpdate(
            '5e00aedf1ef90926f097c7ff',
            {
                $set: {
                    a: { name: req.body.name1, id: '1' },
                    b: { name: req.body.name2, id: '2' },
                },
            },
            { new: true },
        );

        res.send(result);
    }
});

module.exports = router;
