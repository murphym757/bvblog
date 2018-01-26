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
            console.log('Blog posts have successfully loaded')
            return res.render('posts', {posts: posts});
          }
        }).sort({Created_date: 'descending'});
  };

  // GET /post/:id
  exports.delete_post = (req, res, next) => {
    Posts.remove({_id: req.params.id}, (error, posts) => {
      if (error) {
        return next(error);
      } else {
        console.log('post deleted')
        return res.redirect('/posts');
      }
    });
  };

  //DELETE /post/:id
  exports.find_post = (req, res, next) => {
    Posts.findById({_id: req.params.id}, (error, posts) => {
      if (error) {
        return next(error);
      } else {
        console.log('Blog post has successfully loaded')
        return res.render('show', {title: posts.title, body: posts.body, creator: posts.creator, id: posts.id, soundcloud: posts.soundcloud});
      }
    });
  };

  //POST /update/:id
  exports.update_post = (req, res, next) => {
    Posts.findByIdAndUpdate({_id: req.params.id}, {new: true, runValidators: true, overwrite: true}, (error, posts) => {
      if (error) {
        return next(error);
      } else {
        Posts.remove({_id: req.params.id}, (error, posts) => {
        });
        console.log('Blog post has been updated')
        return res.render('update', {title: posts.title, body: posts.body, creator: posts.creator, id: posts.id, soundcloud: posts.soundcloud});
      }
    });
  };

  // POST /post
  exports.submit_new_post = (req, res, next) => {

    if (req.body.title && req.body.body) {

      // create object with form input
      const postData = {
          title: req.body.title,
          body: req.body.body,
          soundcloud: req.body.soundcloud
      };

      // use schema's 'create' method to insert document into Mongoose
      Posts.create(postData, (error, posts) => {
        if (error) {
          return next(error);
        } else {
          return res.redirect('posts');
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

  //GET /edit
  exports.edit_post = (req, res, next) => {
    Posts.findOneAndUpdate({_id: req.params.id}, (error, post) => {
      if (error) {
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('edit', {post: post});
    });
  };
