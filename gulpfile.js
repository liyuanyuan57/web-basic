var gulp = require('gulp');
var exec = require('child_process').exec;

var paths = ['./controller/*','./helper/*','./view-models/*', './views/*','./views/partial/*'];

gulp.task('creat', function() {
  exec('mysql -u root -plenovo123 <./seeds/data.sql');
});

gulp.task('start', function() {
  exec('node app.js');
});

gulp.task('default', function() {
  exec('node app.js');
  gulp.watch(paths, ['start']);
});
