// Gulp Dependencies
var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    cleanCSS    = require('gulp-clean-css'),
    runSequence = require('run-sequence');

// Files and pathes necessary to the project
var projectBasePath    = 'web/';
var assetsBasePath     = projectBasePath + 'assets/';
var angularBasePath    = projectBasePath + 'app/';
var angularSourceFiles = [
  angularBasePath + '*/*prototypes.js',
  angularBasePath + '*/*functions.js',
  angularBasePath + '*/*module.js',
  angularBasePath + '*/*resource.js',
  angularBasePath + '*/*service.js',
  angularBasePath + '*/*model.js',
  angularBasePath + '*/*directive.js',
  angularBasePath + '*/*controller.js',
  angularBasePath + 'app.base.js'
];

var cssSourceFiles = [
  'web/assets/css/**/*.css',
  'web/assets/css/*.css'
];

function buildCSS () {
  gulp.src(cssSourceFiles)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(assetsBasePath))
    .on('end', minifyCSS)
}

function minifyCSS() {
  gulp.src(assetsBasePath + '/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(projectBasePath));
}

function buildJS() {
  gulp.src(angularSourceFiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(angularBasePath))
    .on('end', minifyJS)
}

function minifyJS() {
  gulp.src(angularBasePath + '/app.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(projectBasePath));
}

function buildAndWatch(callback) {
  runSequence('build-css', 'build-js', 'watch', callback);
}

gulp.task('build-css', buildCSS);
gulp.task('build-js', buildJS);

gulp.task('watch', function() {
  gulp.watch(angularSourceFiles, ['build-js']);
  gulp.watch(cssSourceFiles, ['build-css']);
});

gulp.task('default', buildAndWatch);
