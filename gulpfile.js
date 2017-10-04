"use strict";

const gulp = require('gulp'),
	  	babel = require('gulp-babel'),
	  	concat = require('gulp-concat'),
	  	sourcemaps = require('gulp-sourcemaps'),
	  	sass = require('gulp-sass');

gulp.task('babel-js', () => {
	return gulp.src('scripts/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
	gulp.watch('scripts/app.js', ['babel-js']);
});

gulp.task('default', ['babel-js', 'watch']);

// gulp.task('styles', function() {
//     gulp.src('stylesheets/**/*.scss')
//     	.pipe(sourcemaps.init())
//         	.pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('css/'));
// });

//Watch task
// gulp.task('watch', function() {
//     gulp.watch('stylesheets/**/*.scss', ['styles']);
// });