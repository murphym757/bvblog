// app.js
// Load Dependencies
const express = require('express'),
      app = express(),
      favicon = require('serve-favicon'),
      path = require('path'),
      Post = require('./app/models/postModel.js'),
      routes = require('./app/routes/routes.js'),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Postsdb', { useMongoClient: true });

/*
const logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger);
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/', routes);

// View Engine
app.set('view engine', 'pug');

// Paths
app.set('views', path.join(__dirname, '/app', '/views'));

//Static Paths
app.use(express.static(path.join(__dirname + '/assets')));


// Set Static Path
app.use(express.static(path.join(__dirname, 'app')));



// process.env.PORT lets the port be set by Heroku
// use port 3000 unless there exists a preconfigured port ("port" is called with the other dependencies)
//Localhost server
app.listen(port, () => {
    console.log('Server started on port ' + port)
});

module.exports = app;
