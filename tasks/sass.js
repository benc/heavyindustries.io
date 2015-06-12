'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var order = require('gulp-order');
var debug = require('gulp-debug');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

var errorHandler = notify.onError(function (error) {
    gutil.log(error.plugin + ' ERROR ' + error);
    browserSync.notify;
    return error.plugin + ' ' + error.name;
});

gulp.task('sass', function() {
  var sassOpts = {
    errLogToConsole: true
  };

  return gulp.src(['./_sass/**/*.sass', './_sass/**/*.scss'])
    .pipe(debug())
    .pipe(sass(sassOpts).on('error', errorHandler))
    .pipe(gulp.dest('./_site/css'))
    .pipe(gulp.dest('./css'));
});
