'use strict';
const gulp  = require('gulp');
const { exec } = require('child_process');
const del     = require('del');
const nodemon = require("gulp-nodemon");
const ts = require('gulp-typescript');

var tsProject = ts.createProject({
    "declaration": false,
    "module": "es2015",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
});

gulp.task('clean', () => del(['dist/*'], {dot: true}));

gulp.task('dev-server', function () {
    nodemon({
        script: 'dist/server/development.js',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('pro-server', function () {
    nodemon({
        script: 'dist/server/production.js',
        ext: 'js',
        env: { 'NODE_ENV': 'production' }
    });
});

gulp.task('build-server', function() {
    return gulp.src('src/server/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('dist/server'));
});

gulp.task('build-client', function (cb) {
    exec('ng build --prod --build-optimizer', function (err) {
        cb(err);
    });
});

gulp.task('default', gulp.series('clean','build-client','build-server'));
