var gulp = require('gulp');
var exec = require('child_process').exec;
var nodemon = require('gulp-nodemon');

var paths = ['./controller/*', './helper/*', './view-models/*', './views/*', './views/partial/*'];

gulp.task('dbinit', function() {
  exec('mysql -u root -plenovo123 <./seeds/data.sql');
  console.log('database init success!');
});

gulp.task('start', function() {
  nodemon({
      script: 'app.js',
      ext: 'js json',
      ignore: ['public/*']
    })
    .on('restart', function() {
      console.log('restarted!')
    })
})
