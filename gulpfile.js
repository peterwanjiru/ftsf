var requireDir = require('require-dir');
var gulp = require('gulp');

gulp.task('default', ['all-css', 'watch']);

requireDir('./gulp/tasks', { recurse: true });
