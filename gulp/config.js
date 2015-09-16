/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

exports.server = {
    hostname: 'localhost',
    port: 9152
};

exports.proxy = {
    context: '/api',
    hostname: 'example.com',
    port: 80,
    https: false,
    changeOrigin: true
};

exports.lib = [
    'node_modules/traceur/bin/traceur-runtime.js',
    'node_modules/es6-module-loader/dist/es6-module-loader.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/angular2/bundles/angular2.js'
];

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    src: 'app',
    dist: 'dist',
    styles: '/styles/**/*.scss',
    scripts: '/**/*.*js',
    images: '/images/*.{png,jpg,jpeg,gif,webp,svg}',
    html: '/**/*.html',
    bower_components: 'bower_components'
};
