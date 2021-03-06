var gulp = require('gulp');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

gulp.task('libs', function () {
    var size = require('gulp-size');
    return gulp.src(config.lib)
        .pipe(size({showFiles: true, gzip: true}))
        .pipe(gulp.dest('app/lib'));
});

gulp.task('install', shell.task([
    'npm install -g typescript tsd',
    'tsd install angular2 es6-promise rx rx-lite'
]));

gulp.task('init', function () {
    runSequence(
        'install',
        'libs'
    );
});