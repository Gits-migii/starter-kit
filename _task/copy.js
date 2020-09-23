import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import plumber from 'gulp-plumber';
import glob from 'gulp-sass-glob';
import sourcemaps from 'gulp-sourcemaps';

sass.compiler = require('node-sass');


var AUTOPREFIXER_BROWSERS = [
  'last 1 version',
  'ie >= 11',
  'iOS >= 10',
  'Android >= 7.1'
];

class compileTask extends DefaultRegistry {
  init() {
    gulp.task('copy', cb => {
      return gulp.src('_preview/**/*.html')
        .pipe(gulp.dest('output/'));
      cb();
    });

  }

};

module.exports = new compileTask();