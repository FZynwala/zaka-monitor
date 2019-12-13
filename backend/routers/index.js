const express = require("express");
const moment = require("moment");
const tz = require('moment-timezone');
require('moment/locale/pl.js');
const dayModel = require("../models/dayModel");

const router = express.Router();

router.post('/:temp/:humidity/:id', async (req, res) => {
    console.log('Hello fromPOST');
    
    const foundDay = await dayModel.Day.findOne({date: moment(new Date()).tz('Europe/Warsaw').format('l')});
    const sensor = `sensor${req.params.id}`;

    let data = {
        temp: req.params.temp,
        hum: req.params.humidity,
        time: moment(new Date()).tz('Europe/Warsaw').format('LT')
    };
    

    if(!foundDay) {
        if(sensor === 'sensor01') {
            const day = new dayModel.Day({ 
                sensorA: data,
                date: moment(new Date()).tz('Europe/Warsaw').format('l')
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
        console.log('Hello from FoundDay')
        //const text = sensor === 'sensor01' ? 'sensorA' : 'sensorB';

        let maxTemp = 0;
        let minTemp = 100;

        foundDay[sensor].push(data);

        foundDay[sensor].forEach(obj => {
    
            if(parseFloat(obj.temp) > parseFloat(maxTemp)) {
                maxTemp = obj.temp;
                foundDay.maxTemp = { ...foundDay.maxTemp, [sensor]: {
                    maxTemp: maxTemp,
                    time: obj.time}
                };

            }
            if(parseFloat(obj.temp) < parseFloat(minTemp)) {
                minTemp = obj.temp;
                foundDay.minTemp = { ...foundDay.minTemp, [sensor]: {
                    minTemp: minTemp,
                    time: obj.time}
                };
            }
            
        });

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
        sensor01: day.sensor01, 
        sensor02: day.sensor02,
        maxTemp: day.maxTemp,
        minTemp: day.minTemp 
    };

    if(!day) {
        res.status(404).send('There is no data');
    } else {
        res.send(response);
    }
});

router.get('/:day', async (req, res) => {
    const day = await dayModel.Day.findOne({date: req.params.day});
    
    if(!day) {
        res.status(404).send('There is no data');
    } else {
        res.send(day);
    }
});

module.exports = router;