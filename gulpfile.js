'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var flatten = require('gulp-flatten');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('server', function () {
    connect.server({
        root: 'public',
        port: 8080,
        livereload: true
    });
});

gulp.task('index', function () {
  gulp
    .src('./src/index.html')
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload())
  ;
});

gulp.task('less', function () {
  gulp
    .src('./src/**/*.less')
    .pipe(flatten())
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload())
  ;
});

var css = [
  './bower_components/fontawesome/css/font-awesome.css'
];

gulp.task('css', function () {
  gulp.src(css)
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload())
  ;
});

var fonts = [
  './bower_components/fontawesome/fonts/fontawesome-webfont.eot',
  './bower_components/fontawesome/fonts/fontawesome-webfont.svg',
  './bower_components/fontawesome/fonts/fontawesome-webfont.ttf',
  './bower_components/fontawesome/fonts/fontawesome-webfont.woff',
  './bower_components/fontawesome/fonts/fontawesome-webfont.woff2'
];

gulp.task('font', function () {
  gulp.src(fonts)
    .pipe(gulp.dest('./public/fonts'))
    .pipe(connect.reload())
  ;
});

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.less'], ['less']);
  gulp.watch(['./src/index.html'], ['index']);
  //gulp.watch(['./src/**/*.js'], ['app']);
});

gulp.task('default', ['index', 'less', 'css', 'font']);
gulp.task('dev', ['server', 'default', 'watch']);