// redirects user based on signed status
  exports.loggedOut = (req, res, next) => {
    if (req.session && req.session.userId) {
      return res.redirect('/userProfile')
    }
    return next();
  }
  // redirects user if not signed in
  exports.requiresLogin = (req, res, next) => {
    if (req.session && req.session.userId) {
      return next();
    } else {
      const err = new Error('(You must be logged in to create a post)');
      err.status = 401;
      res.render('registration', {
        message: err.message
      });
      console.log(err)
      return next(err);
    }
  }
