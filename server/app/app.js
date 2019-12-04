const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('../api/router');
const winston = require('winston');
const expressWinston = require('express-winston');

mongoose.connect(
  'mongodb://localhost:27017/frontcamp', 
  {
    useNewUrlParser: true, 
    useFindAndModify:false,
    useUnifiedTopology: true, 
    useCreateIndex: true
  }
);

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