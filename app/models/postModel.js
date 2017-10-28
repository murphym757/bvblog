const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true
      }
});

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

const User = mongoose.model('User', UserSchema);
const Post = mongoose.model('Post', PostSchema);

module.exports = {
    User: User,
    Post: Post
};
