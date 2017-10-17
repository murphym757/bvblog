'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  title:{
    type: 'string'
  },
  body:{
    type: 'string'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema);
