'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let watch = require('gulp-watch');
let browserSync = require('browser-sync');

/**
 * complil sas 
 */

gulp.task('sass', function() {
    return gulp.src('./app/scss/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/**
 * concatener js
 */
gulp.task('concat', function() {
    return gulp.src([
            './app/javascript/jquery-3.2.1.min.js',
            './app/javascript/burger.js',
            './app/javascript/slider.js',
            './app/javascript/lightbox.js'
        ]) // ordre de chargement 
        .pipe(concat('production.js'))
        .pipe(gulp.dest('./app/js/'));
});

/**
 *  watch surveille tous les nws file dans ler
 */
gulp.task('watch', ['browserSync', 'sass', 'concat'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/javascript/**/*.js', ['concat']);
    gulp.watch('app/css/global.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/javascript/**/*.js', browserSync.reload);
});

/**
 *  live reload on localhost recharge la page via le localhost
 */
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});