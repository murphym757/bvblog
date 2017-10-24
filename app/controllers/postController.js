'use strict';
const mongoose = require('mongoose'),
      Post = mongoose.model('Posts');

  exports.list_all_posts = (req, res) => {
    Post.find({}).exec((err, posts) => {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.render('posts', {posts: posts});
    });
    console.log('Blog posts have successfully loaded')
  };

  exports.create_new_post = (req, res) => {
    res.render('add');
  };

  exports.submit_new_post = (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    Post.remove({title: title, body: body}).exec((err) => {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.render('posts');
    });
    console.log({title: title, body: body})
  };

/*
  list_all_posts: (req, res) => {
    Posts.find({}).exec(function(err, posts) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.view('posts', {posts: posts});
    });
  };

  create_new_post: (req, res) => {
    res.render('add');
  };

  submit_new_post: (req, res) => {
    var title = req.body.title;
    var body = req.body.body;

    Posts.create({title: title, body: body}).exec(function(err) {
      if (err) {
        res.send(500, {error: 'Database Error'});
      }
      res.redirect('/posts/list');
    });
  };



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
