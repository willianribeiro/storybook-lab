'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var runSequence = require('run-sequence');
var del = require('del');


// Display all available tasks
gulp.task('default', function(){
  console.log('');
  console.log('=== Gulp tasks available ===');
  console.log('');

  console.log('---> gulp build');
  console.log('Generates a distribution version in /dest folder.');
  console.log('');
  console.log('');

  console.log('---> gulp css');
  console.log('Compile SCSS and put in /dist folder.');
  console.log('');
  console.log('');

  console.log('---> gulp javascript');
  console.log('Transpile all JavaScript files from src folder (except *.stories.js[x]?) and put it in /dist folder.');
  console.log('');
  console.log('');

  console.log('---> gulp lint');
  console.log('Lint JavaScript files from src folder (expect *.stories.js[x]?');
  console.log('');
  console.log('');

  console.log('---> gulp clean');
  console.log('Removes /dest folder');
  console.log('');
  console.log('============================');
  console.log('');
});


// Compile sass files to /dist folder
// docs: https://github.com/dlmanning/gulp-sass#basic-usage
gulp.task('css', function() {
  return gulp.src('src/storybook-lab.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('storybook-lab.min.css'))
    .pipe(gulp.dest('.'))
});


// Transpile JavaScript files to /dist folder
// docs: https://github.com/babel/gulp-babel#usage
gulp.task('javascript', function() {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/*.stories.jsx',
    '!src/**/*.stories.js'
  ])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
});


// Lint JavaScript files
// docs: https://github.com/adametry/gulp-eslint#usage
gulp.task('lint', function() {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
    '!src/**/*.stories.jsx',
    '!src/**/*.stories.js'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});


// Removes /dist folder
// docs: https://www.npmjs.com/package/del
gulp.task('clean', function() {
  return del('dist')
});


// This task do:
// 1. Removes /dist folder
// 2. Lint JavaScript files (with lint task)
// 3. Transpile JavaScript files (with javascript task)
// 4. Compile SCSS (with css task)
//
// runSequence() is used to execute tasks syncronously.
// more information here: https://github.com/OverZealous/run-sequence
gulp.task('build', function() {
  runSequence('clean', 'lint', ['javascript', 'css'], function() {
    console.log();
    console.log('Finished - Generated distribution version in /dest folder');
  });
});
