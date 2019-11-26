const express = require('express');
const router = express.Router();
const mockData = require('../mockData/mockData')

router.get('/', (req, res) => {
  res.send(JSON.stringify(mockData));
});

router.post('/', (req, res) => {
  res.json(mockData);
});

router.get('/:id', (req, res) => {
  const article = mockData.sources.filter(news => news.id === req.params.id);
  res.send(JSON.stringify(article));
});

router.put('/:id', (req, res) => {
  const index =  mockData.sources.findIndex(article => article.id === req.params.id);
  const article = body;
  if (index !== -1) {
    mockData.sources[index] = body;
  } else {
    mockData.sources.push(article);
  }
  res.status(200).send(`Put article id=${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  mockData.sources.filter(news => news.id !== req.params.id)
  res.status(200).json({
    message: `Delete news with id: ${req.params.id}`,
  });
});

module.exports = router;