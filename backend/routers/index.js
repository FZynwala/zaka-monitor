const express = require("express");
const moment = require("moment");
const tz = require('moment-timezone');
require('moment/locale/pl.js');
const dayModel = require("../models/dayModel");
const sensorModel = require("../models/sensorModel");

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
        console.log('Hello from not foundDay');
        if(sensor === 'sensor01') {
            const day = new dayModel.Day({ 
                sensor01: data,
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
                sensor02: data,
                date: moment(new Date()).tz('Europe/Warsaw').format('l')
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

/*router.get('/:day', async (req, res) => {
    const day = await dayModel.Day.findOne({date: req.params.day});
    
    if(!day) {
        res.status(404).send('There is no data');
    } else {
        res.send(day);
    }
});*/

router.get('/sensor', async (req, res) => {
    console.log('Hello from SENSOR GET');
    const sensors = await sensorModel.Sensor.find({});
    console.log(sensors);
    const { a, b } = sensors[0];
    const response = { a, b };
    console.log('Response:');
    console.log(response);

    if(!sensors) {
        res.status(404).send('There is no sensors');
    } else {
        res.send(response);
    }

});

router.post('/sensor', async (req, res) => {
    console.log('Hello from SENSOR POST');
    console.log(req.body);

    const foundSensor = await sensorModel.Sensor.find({});
    console.log(foundSensor);

    if(!foundSensor) {
        
            const sensor = new sensorModel.Sensor({
                a: {
                    name: req.body.name1,
                    id: '1'
                },
                b: {
                    name: req.body.name2,
                    id: '2'
                }
            });

            try {
                const result = await sensor.save();
                res.send(result);
            } catch(err) {
                res.send(err);
            }
    
    } else {
        /*foundSensor[0].a.name = req.body.name1;
        foundSensor[0].b.name = req.body.name2;
        //let updatedSensor = { ...foundSensor,  a: {name: req.body.name1, id: foundSensor.id}, b: {name: req.body.name2, id: foundSensor.id} };
        //updatedSensor = { ...updatedSensor, b: {name: req.body.name2, id: foundSensor.id} };
        console.log(foundSensor);
    
        try {
            console.log('Hello from try');
            const result = await foundSensor[0].save();
            console.log(result);
            res.send(result);
        } catch(err) {
            res.send(err);
        }*/

        const result = await sensorModel.Sensor.findByIdAndUpdate('5e00aedf1ef90926f097c7ff', {
            $set: {
                a: {name: req.body.name1, id: '1'},
                b: {name: req.body.name2, id: '2'}
            }
        }, { new: true });
        console.log('result:');
        console.log(result);
        res.send(result);
    }
});

module.exports = router;
