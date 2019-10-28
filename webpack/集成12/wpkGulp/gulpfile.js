const gulp = require('gulp');
const webpack = require('webpack-stream');
return gulp.src('src/index.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));