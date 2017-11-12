const mongoose = require('mongoose'),
      Post = mongoose.model('Post');

  exports.list_all_posts = (req, res, next) => {
    Post.find({}).exec((err, post) => {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.render('posts', {post: post});
    });
    console.log('Blog posts have successfully loaded')
  };

  exports.create_new_post = (req, res, next) => {
    res.render('add');
  };

  // POST /add
  exports.submit_new_post = (req, res, next) => {

    if (req.body.title && req.body.body) {

      // create object with form input
      const postData = {
          title: req.body.title,
          body: req.body.body
      };

      // use schema's 'create' method to insert document into Mongoose
      Post.create(postData, function (error, post) {
        if (error) {
          return next(error);
        } else {
          return res.render('posts', {post_title: post.title, post_body: post.body, created_date: post.Created_date});
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
    Posts.findOne({id: req.params.id}).exec(function(err, post) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('edit', {post: post});
    });
  };

  update_post = (req, res) => {
    var title = req.body.title;
    var body = req.body.body;

    Posts.update({
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
    Posts.find({id: req.params.id}).exec(function(err, posts) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('show', {posts: posts});
    });
  };
*/
