const express = require("express");
const moment = require("moment");
require('moment/locale/pl.js');
const dayModel = require("../models/dayModel");

const router = express.Router();

router.post('/:temp/:humidity/:id', async (req, res) => {
    console.log('Hello fromPOST');
    console.log(req.body);
    const foundDay = await dayModel.Day.findOne({date: moment(new Date()).format('l')});
    const sensor = `sensor${req.params.id}`;
    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).format('LT')
    };
    console.log(sensor);
    console.log(data);

    if(!foundDay) {
        if(sensor === 'sensor01') {
            const day = new dayModel.Day({ 
                sensorA: data
            });
            console.log(`Day: ${day}`);

            try {
                const result = await day.save();
                res.send(result);
            } catch (err) {
                res.send(err);
            };

        } else if(sensor === 'sensor02') {
            const day = new dayModel.Day({ 
                sensorB: data
            });

            try {
                const result = await day.save();
                res.send(result);
            } catch (err) {
                res.send(err);
            };
        }
    } else {
        const text = sensor === 'sensor01' ? 'sensorA' : 'sensorB';
        foundDay[text].push(data);
        console.log(foundDay);

        try {
            const result = await foundDay.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    };    

});

router.get('/', async (req, res) => {
    const day = await dayModel.Day.findOne({date: moment(new Date()).format('l')});
    const response = { 
        sensorA: day.sensorA, 
        sensorB: day.sensorB 
    };

    if(!day) {
        res.status(404).send('There is no data');
    } else {
        res.send(response);
    }
});

router.get('/:day', async (req, res) => {
    const day = await dayModel.Day.findOne({date: req.params.day});
    console.log(day);
    if(!day) {
        res.status(404).send('There is no data');
    } else {
        res.send(day);
    }
});

module.exports = router;