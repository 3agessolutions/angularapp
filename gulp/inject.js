var gulp = require('gulp');
var gulp_inject = require('gulp-inject');
var config = require('./config');

gulp.task('inject', function(){
    return gulp.src(config.appRootPath + '/dev.html')
        .pipe(gulp_inject(gulp.src([
            config.appStylePath + '/css/*.css'
        ], {
            read: false
        }), {
            starttag: '<!-- inject:style:{{ext}} -->',
            addRootSlash: false
        }))
        .pipe(gulp_inject(gulp.src([
            config.appVendorScriptPath + '/vendor.js'
        ], {
            read: false
        }), {
            starttag: '<!-- inject:vendor:{{ext}} -->',
            addRootSlash: false
        }))
        .pipe(gulp_inject(gulp.src([
            config.appScriptPath + '/app.js'
        ], {
            read: false
        }), {
            starttag: '<!-- inject:script:{{ext}} -->',           
            addRootSlash: false
        }))
        .pipe(gulp.dest(config.appRootPath));
});