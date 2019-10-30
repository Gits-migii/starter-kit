import gulp from 'gulp';
import pug from 'gulp-pug';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import DefaultRegistry from 'undertaker-registry';

class compileTask extends DefaultRegistry {
  init() {
    gulp.task('pug', cb => {
      gulp.src(
          ['./_develop/**/*.pug', '!./_develop/**/_*.pug']
        )
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))

        .pipe(pug({
          pretty: true,
          basedir: './_develop/'
        }))

        .pipe(gulp.dest('./_preview/'))
      cb();
      console.log('pug compile!');
    });

    gulp.task('build_pug', cb => {
      gulp.src(
          ['./_develop/**/*.pug', '!./_develop/**/_*.pug']
        )

        .pipe(pug({
          pretty: true,
          basedir: './_develop/'
        }))

        .pipe(gulp.dest('./htdocs/'))
      cb();
      console.log('pug compile!');
    });    
  }

};
module.exports = new compileTask();
