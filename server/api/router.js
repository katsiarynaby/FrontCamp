const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const News = require('./model/news');

router.get('/', (req, res, next) => {
  News.find()
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
});

router.get('/:newsId', (req, res, next) => {
  News.findOne({ _id: req.params.newsId })
    .exec()
    .then(result => {
      console.log('News:', result);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
  const { id, name, description, url, category, country, language } = req.body
  const product = new News({
    _id: new mongoose.Types.ObjectId(),
    id, name, description, url, category, country, language,
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'News was created and saved in DB',
        news: result,
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});


router.delete('/:newsId', (req, res, next) => {
  News
    .remove({ _id: req.params.newsId })
    .exec()
    .then(() => {
      res.status(200).json({
        message: `Delete news with id: ${req.params.id}`,
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;