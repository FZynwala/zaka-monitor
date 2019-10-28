const express = require('express');
const bodyParser = require('body-parser');
const moment = require("moment");

const connectdb = require('./connectDB');
const days = require('./routers/index');

const app = express();

connectdb.connectToDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', days);

const port = process.env.PORT || 3000;
app.listen(port);