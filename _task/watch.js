import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import cssTask from '../_task/css.js';
import babelTask from '../_task/css.js';
import htmlTask from '../_task/html.js';
import browserSync from 'browser-sync';

gulp.registry(cssTask);
gulp.registry(babelTask);
gulp.registry(htmlTask);



class compileTask extends DefaultRegistry {
  init() {
    gulp.task('watch', cb => {
      // コンパイルタスクタイミング
      gulp.watch('./_develop/**/*.pug', gulp.series('pug')).on('change', browserSync.reload);
      gulp.watch('./_develop/**/*.json', gulp.series('pug')).on('change', browserSync.reload);
      gulp.watch('./_develop/**/*.js', gulp.series('babel')).on('change', browserSync.reload);
      gulp.watch('./_develop/**/*.vue', gulp.series('babel')).on('change', browserSync.reload);
      gulp.watch('./_develop/**/*.scss', gulp.series('sass')).on('change', browserSync.reload);
      cb();
    });
  }
}
module.exports = new compileTask();
