import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import browserSync from 'browser-sync';
class compileTask extends DefaultRegistry {
	init() {
		gulp.task('browserSync', cb => {
			browserSync({
				server: {
					baseDir: './_preview/',
					directory: true,
					open: 'external',
				}
			});
			cb();
		});
	}
}

module.exports = new compileTask;
