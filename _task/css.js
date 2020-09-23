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
    gulp.task('sass', cb => {
      console.log('sass compile!');
      return gulp.src('./src/style/**/*.scss')
        .pipe(plumber({}))
        .pipe(glob())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./_preview/assets/style/'))
      cb();
    });

    gulp.task('build_sass', cb => {
      console.log('sass compile!');
      const processors = [
        cssnext({
          browsers: AUTOPREFIXER_BROWSERS
        })
      ];
      return gulp.src('./src/style/**/*.scss')
        .pipe(plumber({}))
        .pipe(glob())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist/assets/style/'))
      cb();
    });
  }

};

module.exports = new compileTask();