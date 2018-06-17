
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const sassLint = require('gulp-sass-lint');

gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass', 'sass-lint'], function () {
    gulp.watch('assets/css/**/*.scss', ['sass']);

})

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