// app.js
// Load Dependencies
const express = require('express'),
      app = express(),
      favicon = require('serve-favicon'),
      path = require('path'),
      Post = require('./app/models/postModel.js'),
      routes = require('./app/routes/routes.js'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')(session),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');


// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Postsdb');
const db = mongoose.connection;

// Mongo Error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
  secret: 'Bayside Vinyl has a blog now',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Make user ID available in templates
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId;
  next();
});

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/', routes);

// View Engine
app.set('view engine', 'pug');

// Paths
app.set('views', path.join(__dirname, '/app', '/views'));

// Set Static Path
app.use(express.static(path.join(__dirname, 'app')));

//Static Paths
app.use(express.static(path.join(__dirname + '/assets')));

// process.env.PORT lets the port be set by Heroku
// use port 3000 unless there exists a preconfigured port ("port" is called with the other dependencies)
//Localhost server
app.listen(port, () => {
    console.log('Server started on port ' + port)
});
