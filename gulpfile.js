
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function () {
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