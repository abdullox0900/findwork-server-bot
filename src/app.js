const express = require('express');
const cors = require('cors');
const Routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',...Routes());

module.exports = app;