var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

gulp.task('optimise', function(){ // Создаем таск "sass"
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 5 versions']))
        .pipe(cleanCSS()) // Опционально, закомментировать при отладке
        //.pipe(concatCss("style.css"))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest('css'))
});
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['optimise']);
});