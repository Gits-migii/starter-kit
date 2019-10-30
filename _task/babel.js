import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify-es';
import notify from 'gulp-notify';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackdevConfig from '../webpack.dev.js';
import webpackprodConfig from '../webpack.prod.js';


class compileTask extends DefaultRegistry {
  init() {
    gulp.task('babel', cb => {
      return plumber({
        errorHandler: notify.onError('<%= error.message %>'),
      })
      .pipe(webpackStream(webpackdevConfig, webpack))
      .pipe(gulp.dest('./'))
      cb();
    });


    gulp.task('build_babel', cb => {
      return plumber({
        errorHandler: notify.onError('<%= error.message %>'),
      })
      .pipe(webpackStream(webpackprodConfig, webpack))
      .pipe(uglify({}))
      .pipe(gulp.dest('./'))
      cb();
    });    

  }

};

module.exports = new compileTask();


