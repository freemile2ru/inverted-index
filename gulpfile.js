const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser', () => {
  browserSync.init({
    server: {
      baseDir: './public',
      index: 'index.html'
    },
    port: process.env.PORT || 9000,
  });
});

gulp.task('watch', ['browser'], () => {
  gulp.watch('public/index.html', browserSync.reload);
  gulp.watch('spec/specRunner.html', browserSync.reload);
  gulp.watch('spec/InvertedIndex.spec.js', browserSync.reload);
  gulp.watch('public/templates/*.html', browserSync.reload);
  gulp.watch('public/css/*.css', browserSync.reload);
  gulp.watch('public/js/*.js', browserSync.reload);
  gulp.watch('public/js/InvertedIndexUI/*.js', browserSync.reload);
});

gulp.task('travis', ['build', 'testServerJs'], () => {
  process.exit(0);
});

gulp.task('default', ['watch']);
