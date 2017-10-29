const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
      title:{
        type: String,
        required: true,
        trim: true
      },
      body:{
        type: String,
        required: true,
        trim: true
      },
      Created_date: {
        type: Date,
        default: Date.now
      }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = {Post: Post};
