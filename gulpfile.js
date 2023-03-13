const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
const PluginError = require('plugin-error');
const { Transform } = require('readable-stream');
const path = require('path');
const less = require('gulp-less');
const smoosher = require('gulp-smoosher');  
const replace = require('gulp-replace'); 

// Compile LESS
gulp.task('compileLess', function () {
  return gulp.src('./!(*base_styles).less')
    .pipe(less())
    .pipe(gulp.dest('./src/stage/'));
}); 

gulp.task('inline', () => {
  return gulp
    .src('./*.html') 
    .pipe(inlineCss({ 
      removeStyleTags: true, 
      removeLinkTags: true,
      preserveMediaQueries: true,
      applyStyleTags: false 
    }))
    .pipe(gulp.dest('./build'));
});    
 

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask