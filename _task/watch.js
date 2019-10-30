import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import cssTask from '../_task/css.js';
import babelTask from '../_task/css.js';
import htmlTask from '../_task/html.js';

gulp.registry(cssTask);
gulp.registry(babelTask);
gulp.registry(htmlTask);



class compileTask extends DefaultRegistry {
  init() {
    gulp.task('watch', cb => {
      // コンパイルタスクタイミング
      gulp.watch('./_develop/**/*.pug', gulp.series('pug'));
      gulp.watch('./_develop/**/*.json', gulp.series('pug'));
      gulp.watch('./_develop/**/*.js', gulp.series('babel'));
      gulp.watch('./_develop/**/*.scss', gulp.series('sass'));
      cb();
    });
  }
}
module.exports = new compileTask();
