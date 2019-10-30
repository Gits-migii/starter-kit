import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import plumber from 'gulp-plumber';
import glob from 'gulp-sass-glob';


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
      return gulp.src('./_develop/**/*.scss')
        .pipe(plumber({}))
        .pipe(glob())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./_preview/assets/'))
      cb();
    });

    gulp.task('build_sass', cb => {
      console.log('sass compile!');
      const processors = [
        cssnext({
          browsers: AUTOPREFIXER_BROWSERS
        })
      ];
      return gulp.src('./_develop/**/*.scss')
        .pipe(plumber({}))
        .pipe(glob())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./htdocs/'))
      cb();
    });
  }

};

module.exports = new compileTask();