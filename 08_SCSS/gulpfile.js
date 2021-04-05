'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob'); //パーシャルをまとめて読み込む ①
var sourcemaps = require('gulp-sourcemaps'); // source map作成 ②
var autoprefixer = require('gulp-autoprefixer'); // ベンダープレフィックス ③
var cleanCSS = require('gulp-clean-css'); // minify ④
var rename = require('gulp-rename'); //ファイル名変更 ⑤

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    // .pipe(rename({
      //   suffix: '.min',
      // }))
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(sourcemaps.write('./'))
    // .pipe(cleanCSS({keepBreaks: false}))
    .pipe(gulp.dest('./css'));
  });
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.task(['sass']));
});