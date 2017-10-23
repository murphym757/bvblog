var postModel = require('../models/postModel.js');

exports.list_all_posts = (req, res) => {
  Posts.find({}).exec(function(err, posts) {
    if (err) {
      res.send(500, {error: 'Database Error'});
    }
    res.render('posts', {posts: posts});
  });
},
exports.create_new_post = (req, res) => {
  res.render('add');
};
/*
  exports.list_all_posts = (req, res) => {
    Posts.find({}).exec(function(err, posts) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('posts', {posts: posts});
    });
  };

  exports.create_new_post = (req, res) => {
    res.view('add');
  };

  create = (req, res) => {
    var title = req.body.title;
    var body = req.body.body;

    Posts.create({title: title, body: body}).exec(function(err) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }

      res.redirect('/posts/list');
    });
  };



  edit = (req, res) => {
    Posts.findOne({id: req.params.id}).exec(function(err, post) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }

      res.view('edit', {post: post});
    });
  };

  update = (req, res) => {
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

  show = (req, res) => {
    Posts.find({id: req.params.id}).exec(function(err, posts) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('show', {posts: posts});
    });
  };
*/
