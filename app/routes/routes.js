/// ROUTES ///
const route = require('express').Router(),
      postController = require('../controllers/postController.js'),
      userController = require('../controllers/userController.js');


//Route For App Landing Page (Homepage.ejs)
route.get('/', (req, res, next) => {
    console.log('The homepage has successfully loaded')
    res.render('index', res);
});

//Route Showing All Posts (posts.pug)
route.route('/posts')
    .get(postController.list_all_posts);

//Route allowing the user to create a post (add.pug)
route.route('/add')
    .get(postController.create_new_post)
    .post(postController.submit_new_post);

//Route Showing All Posts (posts.pug)
route.route('/signup')
    .get(userController.create_new_user)
    .post(userController.submit_new_user);

route.route('/userProfile')
    .get(userController.user_profile);

route.route('/login')
    .get(userController.user_login)
    .post(userController.user_logged_in);

route.route('/logout')
    .get(userController.user_logout);


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
