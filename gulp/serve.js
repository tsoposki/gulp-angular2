var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');
var runSequence = require('run-sequence');

const config = require('./config');
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
    var apiUrl = (config.proxy.https) ? 'https://' : 'http://';
    apiUrl += config.proxy.hostname + ':' + config.proxy.port + config.proxy.context;

    browserSync({
        notify: false,
        port: 9000,
        open: true,
        server: {
            baseDir: [config.paths.src],
            middleware: [
                proxyMiddleware(config.proxy.context, {target: apiUrl, changeOrigin: config.proxy.changeOrigin})
            ]
        }
    });

    gulp.watch([
        config.paths.src + config.paths.html,
        config.paths.src + config.paths.scripts,
        config.paths.src + config.paths.images
    ]).on('change', reload);

    gulp.watch(config.paths.src + config.paths.styles, ['styles']);
    //gulp.watch('bower.json', ['wiredep']);
});

gulp.task('browser-sync:dist', function () {
    var apiUrl = (config.proxy.https) ? 'https://' : 'http://';
    apiUrl += config.proxy.hostname + ':' + config.proxy.port + config.proxy.context;

    browserSync({
        notify: false,
        port: 9000,
        open: open,
        server: {
            baseDir: [config.paths.dist],
            middleware: [
                proxyMiddleware(config.proxy.context, {target: apiUrl, changeOrigin: config.proxy.changeOrigin})
            ]
        }
    });

    gulp.watch([
        config.paths.dist + config.paths.html,
        config.paths.dist + config.paths.scripts,
        config.paths.dist + config.paths.images
    ]).on('change', reload);

    gulp.watch(config.paths.src + config.paths.styles, ['styles']);
});

gulp.task('serve', ['browser-sync']);

gulp.task('serve:dist', function () {
    runSequence(
        ['clean'],
        ['html', 'images'],
        'fileRev',
        'browser-sync:dist'
    );
});