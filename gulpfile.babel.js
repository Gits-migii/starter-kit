import gulp from 'gulp'


//tasks Import
import cssTask from './_task/css'
import htmlTask from './_task/html'
import watchTask from './_task/watch'
import babelTask from './_task/babel'
import serverTask from './_task/server'
import copyTask from './_task/copy'
// import cleanTask from './_task/clean'



//tasks
gulp.registry(cssTask)
gulp.registry(babelTask)
gulp.registry(htmlTask)
gulp.registry(watchTask)
gulp.registry(serverTask)
gulp.registry(copyTask)
// gulp.registry(cleanTask)





gulp.task('default', gulp.series(
  // 'clean_html',
  'babel',
  'sass',
  'pug',
  gulp.parallel('browserSync', 'watch')

))


gulp.task('deploy', gulp.series(
  // 'clean_build',
  'copy',
  'build_pug',
  'build_sass',
  'build_babel',
))