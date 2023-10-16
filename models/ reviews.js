const mongoose = require('mongoose');
var reviewsSchema = new mongoose.Schema({
    Rate: {
        type : Number,
    },
   Reviews:{
        type: String,
  },
  Role:{
    type: String
  },
  Content:{
    type: String
  },
  Name:{
    type: String
  },
  Phone:{
    type: String
  },
  Email:{
    type: String
  }

    
}, {timestamps: true});

module.exports = mongoose.model('reviews', reviewsSchema);