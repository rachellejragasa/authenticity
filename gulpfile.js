const gulp = require('gulp');
var header = require('gulp-header');
const sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const sassLint = require('gulp-sass-lint');
var uglify = require('gulp-uglify');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

    // Bootstrap
    gulp.src([
        './node_modules/bootstrap/dist/**/*',
        '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
        '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
      ])
      .pipe(gulp.dest('./vendor/bootstrap'))
  
    // Font Awesome
    gulp.src([
        './node_modules/font-awesome/**/*',
        '!./node_modules/font-awesome/{less,less/*}',
        '!./node_modules/font-awesome/{scss,scss/*}',
        '!./node_modules/font-awesome/.*',
        '!./node_modules/font-awesome/*.{txt,json,md}'
      ])
      .pipe(gulp.dest('./vendor/font-awesome'))
  
    // jQuery
    gulp.src([
        './node_modules/jquery/dist/*',
        '!./node_modules/jquery/dist/core.js'
      ])
      .pipe(gulp.dest('./vendor/jquery'))
  
    // jQuery Easing
    gulp.src([
        './node_modules/jquery.easing/*.js'
      ])
      .pipe(gulp.dest('./vendor/jquery-easing'))
  
    // Simple Line Icons
    gulp.src([
        './node_modules/simple-line-icons/fonts/**',
      ])
      .pipe(gulp.dest('./vendor/simple-line-icons/fonts'))
  
    gulp.src([
        './node_modules/simple-line-icons/css/**',
      ])
      .pipe(gulp.dest('./vendor/simple-line-icons/css'))
  
});

// Compile SCSS
gulp.task('css:compile', function() {
    return gulp.src('assets/css/**/*.scss')
      .pipe(sass.sync({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(gulp.dest('./'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './*.css',
      '!./*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
    return gulp.src([
        './assets/js/*.js',
        '!./assets/js/*.min.js'
      ])
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./assets/js'))
      .pipe(browserSync.stream());
  });
  
// JS
gulp.task('js', ['js:minify']);


// Default task
gulp.task('default', ['css', 'js', 'vendor']);

gulp.task('browserSync', function() {
    const files = [
        'style.css',
        '*.php'
    ];
  
    browserSync.init(files, {
        proxy: 'http://localhost:8888/'
    })
});

gulp.task('sass-lint', function () {
    return gulp.src([
        'assets/css/**/*.scss'
        //'!sass/dont-watch-this.scss'
    ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


// Dev task
gulp.task('dev', ['css', 'js', 'sass-lint', 'browserSync'], function() {
    gulp.watch('./assets/css/*.scss', ['css']);
    gulp.watch('./asset/js/*.js', ['js']);
    gulp.watch('./*.php', browserSync.reload);
  });
  















