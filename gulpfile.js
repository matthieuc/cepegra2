"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('default',['styles'],function(){
	console.log("hello gulp is there");
});

gulp.task('styles',function(){
	
	console.log('styles');
	return gulp.src('assets/scss/*.scss').pipe(sass().on('error',sass.logError)).pipe(gulp.dest('assets/css'));

});