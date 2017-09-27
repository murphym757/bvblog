// app.js
// Load Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
/*
const logger = function(req, res, next){
  console.log('Logging...');
  next();
}

app.use(logger);
*/

// View Engine
app.set('view engine', 'pug');

// Paths
app.set('views', path.join(__dirname, '/app', 'views'));


//Static Paths
app.use(express.static(path.join(__dirname + '/assets')));


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'app')));

var users = [
  {
    id: 1,
    first_name: 'Maurice',
    last_name: 'Murphy',
    email: 'mmdeveloper@miami.com'
  },
  {
    id: 2,
    first_name: 'Desus',
    last_name: 'Nice',
    email: 'vicelandDN@bronx.com'
  },
  {
    id: 3,
    first_name: 'Kid',
    last_name: 'Mero',
    email: 'vicelandKM@bronx.com'
  }
]
//Route For App Landing Page (Homepage.ejs)
app.get('/', (req, res) => {
  res.render('homepage');
});
//Route For Addding A Post (add.ejs)
app.get('/add', (req, res) => {
    res.render('add');
});
//Route For Editing A Post (edit.ejs)
app.get('/edit', (req, res) => {
    res.render('edit');
});
//Route Showing All Posts (list.ejs)
app.get('/list', (req, res) => {
    res.render('list');
});
//Route Showing A Specified Post (show.ejs)
app.get('/show', (req, res) => {
    res.render('show');
});

// process.env.PORT lets the port be set by Heroku
// use port 3000 unless there exists a preconfigured port
//Localhost server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started on Port 3000')
});
