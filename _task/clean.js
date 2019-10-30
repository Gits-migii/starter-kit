
import gulp from 'gulp';
import del from 'del';
import DefaultRegistry from 'undertaker-registry';



class compileTask extends DefaultRegistry {
  init() {

    gulp.task('clean_html', cb => {
      del(['./_preview/**/*.html']);
      cb();
    });
    

    gulp.task('clean_build', cb => {
      del(['./htdocs/**/*.html']);
      cb();
    });
  }
};

module.exports = new compileTask();






