const express = require("express");
const moment = require("moment");
const dayModel = require("../models/dayModel");

const router = express.Router();

router.post('/', async (req, res) => {
    const day = await dayModel.Day.findOne({date: moment(new Date()).format('l')});
    let data = {
        temp: req.body.temp
    };

    if(!day) {
        const day = new dayModel.Day({
            temp: data,
            sensorID: req.body.sensorID
        });

        try {
            const result = await day.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        };
    } else {
        day.temp.push({temp: req.body.temp});

        try {
            const result = await day.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }
    };    

});

module.exports = router;