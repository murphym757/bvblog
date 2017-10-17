/// ROUTES ///
'use strict';
const route = require('express').Router(),
      postController = require('../controllers/postController.js');
let username = "Kendrick";


//Route For App Landing Page (Homepage.ejs)
route.get('/', (req, res, next) => {
    console.log('The homepage has successfully loaded')
    res.render('index', res);
});

//Route Showing All Posts (list.ejs)
route.route('/posts')
.get(postController.list_all_posts);
module.exports = route;


/* THESE ROUTES ARE TIED EXCLUSIVELY TO CONTROLLERS


//Route Showing All Posts (list.ejs)
route.get('/posts', (req, res, next) => {
    res.username = username;
    console.log('Blog posts have successfully loaded')
    res.render('posts', res);
});

//Route Showing A Specified Post (show.ejs)
route.get('/show', (req, res, next) => {
    console.log('The "" page has successfully loaded')
    res.render('show', res);
});
//Route For Addding A Post (add.ejs)
route.get('/add', (req, res, next) => {
    console.log('The "" page has successfully loaded')
    res.render('add', res);
});
//Route For Editing A Post (edit.ejs)
route.get('/edit', (req, res, next) => {
    console.log('The "" page has successfully loaded')
    res.render('edit', res);
});
*/

module.exports = route;
