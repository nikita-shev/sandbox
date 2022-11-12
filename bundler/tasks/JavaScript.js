import { path } from '../settings.js';
import webpackConfig from '../../webpack.config.js';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { js } = path;

class JavaScript {
   configureJsFiles() {
      return src(js.src)
         .pipe(sourcemaps.init())
         .pipe(webpack(webpackConfig))
         .pipe(sourcemaps.write())
         .pipe(dest(js.public))
         .pipe(browserSync.stream());
   }

   buildJs() {
      return src(js.src)
         .pipe(webpack(webpackConfig))
         .pipe(rename({ suffix: '.min' }))
         .pipe(dest(js.build));
   }
}

export default new JavaScript();
