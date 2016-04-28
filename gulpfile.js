(function() {
  'use strict';

  var gulp = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      sassFiles = [
        './src/global.scss',
        './src/**/*.scss'
      ],
      uglify = require('gulp-uglifyjs'),
      jsFiles = ['src/**/*.js'];

  gulp.task('sass-compress', function() {
    gulp
      .src(sassFiles)
      .pipe(concat('file.scss'))
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(rename(function(path) {
        path.dirname = '';
        path.basename = 'mdl-selectfield';
        path.extname = '.min.css';
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('sass', function () {
    gulp
      .src(sassFiles)
      .pipe(concat('mdl-selectfield.scss'))
      .pipe(sass({
        sourceComments: false
      }).on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('js-compress', function() {
    gulp
      .src(jsFiles)
      .pipe(uglify('mdl-selectfield.min.js', {
        outSourceMap: true
      }))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('js', function() {
    gulp
      .src(jsFiles)
      .pipe(rename(function(path) {
        path.dirname = '';
        path.basename = 'mdl-selectfield';
        path.extname = '.js';
      }))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass', 'sass-compress']);
    gulp.watch(jsFiles, ['js', 'js-compress']);
  });

  gulp.task('build', ['sass', 'sass-compress', 'js', 'js-compress']);

  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['watch']);

})();
