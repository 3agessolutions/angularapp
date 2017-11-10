var gulp = require('gulp');
var gulp_inject = require('gulp-inject');
var config = require('./config');

gulp.task('inject', function () {
    var paths = config.development ? [
        config.appSrcPath + '/**/*.module.js',
        '!' + config.appSrcPath + '/**/js/*.js',
        config.appSrcPath + '/**/*.js',
    ] : [
            config.appScriptPath + '/app.js'
        ];
        
    return gulp.src(config.appRootPath + '/dev.html')
        .pipe(gulp_inject(gulp.src([
            config.appStylePath + '/css/vendor.css'
        ], {
                read: false
            }), {
                starttag: '<!-- inject:vendor:{{ext}} -->',
                addRootSlash: false
            }))
        .pipe(gulp_inject(gulp.src([
            config.appStylePath + '/css/style.css'
        ], {
                read: false
            }), {
                starttag: '<!-- inject:style:{{ext}} -->',
                addRootSlash: false
            }))
        .pipe(gulp_inject(gulp.src([
            config.appScriptPath + '/vendor.js'
        ], {
                read: false
            }), {
                starttag: '<!-- inject:vendor:{{ext}} -->',
                addRootSlash: false
            }))
        .pipe(gulp_inject(gulp.src(paths, {
            read: false
        }), {
                starttag: '<!-- inject:script:{{ext}} -->',
                addRootSlash: false
            }))
        .pipe(gulp.dest(config.appRootPath));
});