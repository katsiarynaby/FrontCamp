const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
    name: String,
    description: String,
    url: String,
    category: String,
    language: String,
    country: String,
  });
  
   module.exports =  mongoose.model('NewModel', newsSchema); 