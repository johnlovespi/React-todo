'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(logger('dev'));


app.listen(PORT, () => console.log('listing to Port' , PORT));
