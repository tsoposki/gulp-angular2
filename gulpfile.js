// TODO: [tsoposki] will be implemented soon
const build = require('./gulp/build');

const config = require('./gulp/config');
const serve = require('./gulp/serve');
const styles = require('./gulp/styles');
const init = require('.gulp/init');

var gulp = require('gulp');


gulp.task('default', ['serve']);