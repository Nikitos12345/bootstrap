var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
    concatCss = require('gulp-concat-css');
    cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});
gulp.task('autoprefix', function () {
    return gulp.src('css/scss.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});
gulp.task('concat', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("css/style.css"))
        .pipe(gulp.dest(''));
});