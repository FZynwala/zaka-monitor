const express = require('express');
const bodyParser = require('body-parser');
const connectdb = require('./connectDB');

const app = express();

connectdb.connectToDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
app.listen(port);