const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('../api/router');
const winston = require('winston');
const expressWinston = require('express-winston');

// const userRouts = require('../api/router-local'); //for local-passport
// require('../api/strategy/local-passport')(passport);

const userRouts = require('../api/router-facebook');
require('../api/strategy/facebook-passport')(passport);


mongoose.connect(
  'mongodb://localhost:27017/frontcamp',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);
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
app.use(bodyParser.json());

app.use(session({ secret: 'secret' }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/news', router);
app.use(userRouts);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
});

module.exports = app;