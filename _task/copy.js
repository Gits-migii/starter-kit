import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';

const copyArray = [
  '_preview/**/*.html',
  '_preview/**/*.jpg',
  '_preview/**/*.png',
  '_preview/**/*.gif',
  '_preview/**/*.json',
  '_preview/**/*.pdf'
]

class compileTask extends DefaultRegistry {
  init() {
    gulp.task('copy', cb => {
      return gulp.src(copyArray)
        .pipe(gulp.dest('dist/'));
      cb();
    });

  }

};

module.exports = new compileTask();