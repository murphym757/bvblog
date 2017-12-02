const mongoose = require('mongoose'),
      Posts = mongoose.model('Post');

  // GET /add
  exports.create_new_post = (req, res, next) => {
    res.render('add');
  };

  // GET /post
  exports.list_all_posts = (req, res, next) => {

    Posts.find({}, (error, posts) => {
          if (error) {
            return next(error);
          } else {
            return res.render('posts', {posts: posts});
            console.log('Blog posts have successfully loaded')
          }
        });
  };

  // POST /post
  exports.submit_new_post = (req, res, next) => {

    if (req.body.title && req.body.body) {

      // create object with form input
      const postData = {
          title: req.body.title,
          body: req.body.body
      };

      // use schema's 'create' method to insert document into Mongoose
      Posts.create(postData, (error, posts) => {
        if (error) {
          return next(error);
        } else {
          return res.redirect('posts');
          console.log({postData})
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

/*

  edit_post: (req, res) => {
    Post.findOne({id: req.params.id}).exec(function(err, post) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('edit', {post: post});
    });
  };

  update_post = (req, res) => {
    var title = req.body.title;
    var body = req.body.body;

    Post.update({
      id: req.params.id
    }, {
      title: title,
      body: body
    }).exec(function(err) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/posts/list');
    });

    return false;
  };

  show_post: (req, res) => {
    Post.find({id: req.params.id}).exec(function(err, posts) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('show', {posts: posts});
    });
  };
*/
