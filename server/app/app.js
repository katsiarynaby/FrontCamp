const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('../api/router');
const winston = require('winston');
const expressWinston = require('express-winston');

app.use(bodyParser.json());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/news', router);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')

});

module.exports = app;