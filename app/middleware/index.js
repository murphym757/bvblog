// redirects user based on signed status
  exports.loggedOut = (req,res, next) => {
    if (req.session && req.session.userId) {
      return res.redirect('/userProfile')
    }
    return next();
  }
