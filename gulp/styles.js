var gulp = require('gulp');

const $ = require('gulp-load-plugins')();

const config = require('./config');
const reload = require('browser-sync').reload;

gulp.task('styles', function () {
    return gulp.src(config.paths.src + config.paths.styles)
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['last 2 version']}))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.paths.src + '/styles'))
        .pipe(reload({stream: true}));
});