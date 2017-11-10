var gulp = require('gulp');
var gulp_sass = require('gulp-sass');
var gulp_clean = require('gulp-clean');
var gulp_useref = require('gulp-useref');
var gulp_uglify = require('gulp-uglify');
var gulp_inject = require('gulp-inject');
var gulp_util = require('gulp-util');
var config = require('./gulp/config');
var runSequence = require('run-sequence');
var mainBowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');


var requireDir = require('require-dir');

requireDir(config.appRootPath + 'gulp');

gulp.task('clean', function () {
    // return gulp.src([
    //   ...
    // ]).pipe(gulp_clean());
});

gulp.task('serve', function () {
    runSequence('css', 'js', 'inject'); 
});

gulp.task('css', function () {
    return gulp.src(config.appStylePath + '/sass/*.scss')
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest(config.appStylePath + '/css'));
});

gulp.task('js', function () {
    runSequence('vendor-js', 'app-js');     
});

gulp.task('vendor-js', function () {
    return gulp.src(mainBowerFiles())
        .pipe(gulp_useref())
        .pipe(gulp_uglify())
        .on('error', function (err) { gulp_util.log(gulp_util.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest(config.appVendorScriptPath));
});

gulp.task('app-js', function () {
    return gulp.src([
        config.appSrcPath + '/app/**/*.module.js',
        config.appSrcPath + '/app/**/*.js',
        '!' + config.appVendorScriptPath + '/*.js', 
        '!' + config.appScriptPath + '/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(gulp_useref())
    .pipe(ngAnnotate())
    .pipe(gulp_uglify())
    .on('error', function (err) { gulp_util.log(gulp_util.colors.red('[Error]'), err.toString()); })    
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.appScriptPath));
});

