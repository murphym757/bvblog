// app.js
// Load Dependencies
const express = require('express'),
      bodyParser = require('body-parser'),
      favicon = require('serve-favicon'),
      path = require('path'),
      posts = require('./app/models/postModel.js'),
      routes = require('./app/routes/routes.js'),
      app = express(),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000;

/*
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Postsdb');
*/
/*
const logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger);
*/

// Routes
app.use('/', routes);

// View Engine
app.set('view engine', 'pug');

// Paths
app.set('views', path.join(__dirname, '/app', '/views'));

//Static Paths
app.use(express.static(path.join(__dirname + '/assets')));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'app')));



// process.env.PORT lets the port be set by Heroku
// use port 3000 unless there exists a preconfigured port ("port" is called with the other dependencies)
//Localhost server
app.listen(port, () => {
    console.log('Server started on port ' + port)
});

module.exports = app;
