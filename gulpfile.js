var gulp = require('gulp');
var gulp_sass = require('gulp-sass');
var gulp_clean = require('gulp-clean');
var gulp_concat = require('gulp-concat');
var gulp_uglify = require('gulp-uglify');
var gulp_inject = require('gulp-inject');
var gulp_util = require('gulp-util');
var config = require('./gulp/config');
var runSequence = require('run-sequence');
var mainBowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');


var requireDir = require('require-dir');

requireDir(config.appRootPath + 'gulp');

gulp.task('clean', function () {
    return gulp.src([
      config.appStylePath + '/css',
      config.appScriptPath
    ]).pipe(gulp_clean());
});

gulp.task('serve', function () {
    runSequence('clean', 'cache', 'css',  'js');
});

gulp.task('serve-dev', function(){
    config.development = true;
    runSequence('clean', 'cache', 'css',  'js-dev');
});

gulp.task('css', function () {
    runSequence('app-css', 'vendor-css', 'inject');
});

gulp.task('vendor-css', function () {
    return gulp.src(mainBowerFiles(['**/*.css']))
        .pipe(gulp_concat('vendor.css'))
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest(config.appStylePath + '/css'));
});

gulp.task('app-css', function () {
    return gulp.src([
        config.appStylePath + '/sass/*.scss',
        config.appSrcPath + '/**/*.scss'
    ])
        .pipe(gulp_concat('style.css'))
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest(config.appStylePath + '/css'));
});

gulp.task('js', function () {
    runSequence('app-js', 'vendor-js', 'inject');
});

gulp.task('js-dev', function () {
    runSequence('vendor-js', 'inject');
});

gulp.task('app-js', function () {
    return gulp.src([
        config.appSrcPath + '/**/*.module.js',
        config.appSrcPath + '/**/*.js'
    ])
        .pipe(gulp_concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp_uglify())
        .on('error', function (err) { gulp_util.log(gulp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(config.appScriptPath));
});

gulp.task('vendor-js', function () {
    return gulp.src(mainBowerFiles(['**/*.js']))
        .pipe(gulp_concat('vendor.js'))
        .pipe(gulp_uglify())
        .on('error', function (err) { gulp_util.log(gulp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(config.appScriptPath));
});

gulp.task('cache', function () {
    return gulp.src(config.appSrcPath + '/**/*.html')
      .pipe(templateCache('angapp.template.js', {
        module: 'angapp'
      }))
      .pipe(gulp.dest(config.appSrcPath + '/app/modules'));
    return;
  });