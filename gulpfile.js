/**
 * Created by wenchao on 2018/1/25.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './front_src/series/series2/series2.html'
    });
});

gulp.task('watch', function () {
    gulp.watch('./front_src/series/series1/series1.html', browserSync.reload);
    gulp.watch('./front_src/series/series1/series1.js', browserSync.reload);
    gulp.watch('./front_src/series/series2/series2.html', browserSync.reload);
    gulp.watch('./front_src/series/series2/series2.js', browserSync.reload);
});
gulp.task('default', ['browser-sync', 'watch']);
