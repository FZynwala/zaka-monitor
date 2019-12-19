const express = require('express');
const bodyParser = require('body-parser');
const moment = require("moment");
require('moment/locale/pl.js');

const connectdb = require('./connectDB');
const days = require('./routers/index');

const app = express();

require('./prod')(app);
connectdb.connectToDB();

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://fzynwala.github.io");
    res.header('Access-Control-Allow-Methods', "GET");
    res.header('Access-Control-Allow-Methods', "PUT");
    res.header('Access-Control-Allow-Methods', "DELETE");
    res.header('Access-Control-Request-Headers', "Content-Type");
    res.header('Access-Control-Allow-Headers', "Content-Type");

    next();
  };

app.use(allowCrossDomain);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', days);

const port = process.env.PORT || 8000;
app.listen(port);