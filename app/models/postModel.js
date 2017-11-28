const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//For User
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
// Authenticate input against database documents
UserSchema.statics.authenticate  =  function(email, password, callback) {
  User.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error);
        } else if ( !user ) {
          const err = new Error('User not found');
          err.status = 401;
          console.log(err)
          return callback(err);
        }
        bcrypt.compare(password, user.password, function(error, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
}

// Hash password before saving to database
UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

// For Posts
const PostSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true
      },
      body: {
        type: String,
        required: true,
        trim: true
      },
      Created_date: {
        type: Date,
        default: Date.now()
      },
      username: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Post = mongoose.model('Post', PostSchema);
const User = mongoose.model('User', UserSchema);
module.exports = {Post: Post,
                  User: User};
