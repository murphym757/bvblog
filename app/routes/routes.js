/// ROUTES ///
const route = require('express').Router(),
      postController = require('../controllers/postController.js'),
      userController = require('../controllers/userController.js'),
      mid = require('../middleware/index.js');


//Route For App Landing Page (Homepage.ejs)
route.get('/', (req, res, next) => {
    console.log('The homepage has successfully loaded')
    res.render('index', res);
});
route.get('/registration', (req, res, next) => {
    console.log('The homepage has successfully loaded')
    res.render('registration', res);
});

//Route Showing All Posts (posts.pug)
route.route('/posts')
    .get(postController.list_all_posts)
    .post(postController.submit_new_post);

//Route allowing the user to a view specific post (show.pug)
route.route('/posts/:id')
    .get(postController.find_post);

//Route allowing the user to a delete specific post (delete.pug)
route.route('/delete/:id')
    .get(postController.delete_post);

//Route allowing the user to a update specific post (update.pug)
route.route('/update/:id')
    .put(postController.update_post);

//Route allowing the user to create a post (add.pug)
route.route('/add')
    .get(mid.requiresLogin)
    .get(postController.create_new_post);

//Route Showing All Posts (posts.pug)
route.route('/signup')
    .get(mid.loggedOut)
    .get(userController.create_new_user)
    .post(userController.submit_new_user);

route.route('/userProfile')
    .get(userController.user_profile);

route.route('/login')
    .get(mid.loggedOut)
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
