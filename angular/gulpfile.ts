"use strict";

const gulp = require("gulp");
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("./src/tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require('gulp-sass');
const minifycss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["../electron/app/localService/public"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write(".", { sourceRoot: '/src' }))
        .pipe(gulp.dest("../electron/app/localService/public"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ['node_modules'], () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("../electron/app/localService/public"));
});

/**
 * Copy all node_modules librarys.
 */
gulp.task("node_modules", () => {

    gulp.src(["node_modules/core-js/client/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/core-js/client/"));
    gulp.src(["node_modules/zone.js/dist/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/zone.js/dist/"));
    gulp.src(["node_modules/systemjs/dist/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/systemjs/dist/"));
    gulp.src(["node_modules/json2csv/dist/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/json2csv/dist/"));
    gulp.src(["node_modules/@angular/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/@angular/"));
    gulp.src(["node_modules/rxjs/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/rxjs/"));
    gulp.src(["node_modules/ng2-device-detector/**/*"])
        .pipe(gulp.dest("../electron/app/localService/public/node_modules/ng2-device-detector/"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("../electron/app/localService/public/lib"));
});

gulp.task("lib", () => {
    return gulp.src([
        "./src/assets/bower_components/jquery/jquery.min.js",
        "./src/assets/bower_components/moment/moment.js",
        "./src/assets/bower_components/moment/locale/pt-br.js",
        "./src/assets/bower_components/sass-bootstrap/dist/js/bootstrap.min.js",
        "./src/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js",
        "./src/assets/bower_components/bootstrap-fileinput/js/fileinput.js",
        "./src/assets/bower_components/bootstrap-fileinput/js/locales/pt-BR.js",
        "./src/assets/bower_components/bootstrap-select/js/bootstrap-select.js",
        "./src/assets/bower_components/wow/dist/wow.min.js",
        "./src/assets/bower_components/Waves/dist/waves.min.js",
        "./src/assets/bower_components/slick-carousel/slick/slick.js",
        "./src/assets/bower_components/iCheck/icheck.min.js",
        "./src/assets/bower_components/sweetalert/dist/sweetalert.min.js",
        "./src/assets/bower_components/bootstrap-validator/dist/validator.min.js",
        "./src/assets/bower_components/jquery-form/dist/jquery.form.min.js",
        "./src/assets/bower_components/waypoints/lib/jquery.waypoints.min.js",
        "./src/assets/bower_components/chart.js/dist/chart.min.js",
        "./src/assets/bower_components/jquery-qubit/jquery.qubit.js",
        "./src/assets/bower_components/jquery-bonsai/jquery.bonsai.js",
        "./src/assets/bower_components/jquery-mask-plugin/dist/jquery.mask.min.js",
        "./src/assets/bower_components/datatables.net/js/jquery.dataTables.min.js",
        "./src/assets/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js"
    ]) /* Glob required here. */
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./src/dist/scripts/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/scripts/'))
});

gulp.task("libCss", () => {
    return gulp.src([
        "./src/assets/bower_components/animate.css/animate.min.css",
        "./src/assets/bower_components/bootstrap-select/dist/css/bootstrap-select.min.css",
        "./src/assets/bower_components/iCheck/skins/all.css",
        "./src/assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css",
        "./src/assets/bower_components/Waves/dist/waves.min.css",
        "./src/assets/bower_components/jquery-bonsai/jquery.bonsai.css",
        "./src/assets/bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css",
        "./src/assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css"
    ]) /* Glob required here. */
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(concat('plugins.css'))
        .pipe(gulp.dest('./src/dist/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/styles/'))
});




gulp.task("scripts", () => {
    return gulp.src([
        "./src/assets/scripts/main.js"
    ]) /* Glob required here. */
        .pipe(gulp.dest("./src/dist/scripts/"));
});

gulp.task('styles', function () {
    gulp.src([
        './src/assets/styles/**/*.scss',

    ])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./src/dist/styles/'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('./src/dist/styles/'))
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('default', function () {
    // gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
    //     console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    // });
    // gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
    //     console.log('Resource file ' + e.path + ' has been changed. Updating.');
    // });
    gulp.watch("./src/assets/styles/**/*.scss", ['styles', 'libCss']);
    gulp.watch("./src/assets/scripts/**/*.js", ['scripts']);
    gulp.watch("./src/assets/scripts/lib.js", ['lib']);
});

/**
 * Build the project.
 */
gulp.task("build", ['resources', 'libs'], () => {
    console.log("Building the project ...");
});