const mongoose = require('mongoose'),
      User = mongoose.model('User');

  exports.create_new_user = (req, res, next) => {
    res.render('signup');
  };

  // POST /signup
  exports.submit_new_user = (req, res, next) => {
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.confirmPassword) {

  // confirm that user typed same password twice
  if (req.body.password !== req.body.confirmPassword) {
    const err = new Error('Passwords do not match');
    err.status = 400;
    res.render('error', {
      message: err.message
    });
    console.log(err)
    return next(err);
  }

  // create object with form input
  const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
  };

  // use schema's 'create' method to insert document into Mongoose
  User.create(userData, function (error, user) {
    if (error) {
      return next(error);
    } else {
      return res.render('userProfile', {userData});
      console.log({userData})
    }
  });

    } else {
      const err = new Error('All fields required');
      err.status = 400;
      res.render('error', {
        message: err.message
      });
      console.log(err)
    }
  };
