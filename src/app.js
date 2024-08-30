const express = require('express');
const cors = require('cors');
const vacanciesRoute = require('./routes/apiVacancies');
const taskRoute = require('./routes/apiTask');
const adsRoute = require('./routes/apiAds');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', vacanciesRoute);
app.use('/api', taskRoute);
app.use('/api', adsRoute);

module.exports = app;