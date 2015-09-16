const build = require('./gulp/build');
const config = require('./gulp/config');
const serve = require('./gulp/serve');
const styles = require('./gulp/styles');

var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('libs', function () {
    var size = require('gulp-size');
    return gulp.src(config.lib)
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest('app/lib'));
});

gulp.task('install', shell.task([
    'npm install -g typescript tsd',
    'npm install',
    'tsd install angular2 es6-promise rx rx-lite'
]));

gulp.task('init', function () {
    runSequence(
        'install',
        'libs',
        'serve'
    );
});