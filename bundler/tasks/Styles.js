import { path } from '../settings.js';

import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import webpCss from 'gulp-webpcss';
import groupMediaQueries from 'gulp-group-css-media-queries';
import clean from 'gulp-clean-css';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);
const { src, dest } = gulp;
const { css } = path;

class Styles {
   static compileFiles() {
      return src(css.src, { sourcemaps: true })
         .pipe(sass.sync().on('error', sass.logError))
         .pipe(postcss([autoprefixer()]))
         .pipe(
            webpCss({
               webpClass: '.webp',
               replace_from: /\.(png|jpg|jpeg)/,
               replace_to: '.webp'
            })
         )
         .pipe(groupMediaQueries());
   }

   configureStyleFiles() {
      return Styles.compileFiles().pipe(dest(css.public)).pipe(browserSync.stream());
   }

   buildStyleFiles() {
      return Styles.compileFiles()
         .pipe(clean())
         .pipe(rename({ suffix: '.min' }))
         .pipe(dest(css.build));
   }
}

export default new Styles();
