(function() {
  'use strict';

  var gulp = require('gulp'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      sassFiles = ['./src/**/*.scss'],
      uglify = require('gulp-uglifyjs'),
      jsFiles = ['src/**/*.js'];

  gulp.task('sass', function () {
    gulp
      .src(sassFiles)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename(function(path) {
        path.dirname = '';
        path.basename = 'mdl-selectfield';
        path.extname = '.min.css';
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./'));
  });

  gulp.task('uglify', function() {
    gulp
      .src(jsFiles)
      .pipe(uglify('mdl-selectfield.min.js', {
        outSourceMap: true
      }))
      .pipe(gulp.dest('./'));
  });

  gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(jsFiles, ['uglify']);
  });

  gulp.task('build', ['sass', 'uglify']);

  // The default task (called when you run `gulp` from cli)
  gulp.task('default', ['watch']);

})();
