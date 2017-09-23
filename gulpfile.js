var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var sass = require('gulp-sass');


  /*
    --TOP LEVEL FUNCTIONS --
    gulp.task -  Define tasks
    gulp.src -   Point to files to use
    gulp.dest -  Points to folder to output
    gulp.watch - Watch files and folders for changes
  */

  // Logs Message
  gulp.task('message', () => {
    return console.log('Gulp is running...')
  });

  gulp.task('hello', function() {
    console.log('Hello Zell');
  });


gulp.task('sass', () => {
  gulp.src('src/assets/styles/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/assets/styles/css'));
});

gulp.task('bootstrap', function() {
  return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(customizeBootstrap('styles/scss/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest('app/assets/styles/bootstrap'));
});
gulp.task('default', [ 'html', 'css' ]);
