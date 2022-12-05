import { path } from '../settings.js';

import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import { htmlValidator } from 'gulp-w3c-html-validator';
import htmlMin from 'gulp-htmlmin';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { html } = path;

class HTML {
   static compileFiles() {
      return src(html.src)
         .pipe(fileInclude())
         .pipe(htmlValidator.analyzer())
         .pipe(htmlValidator.reporter());
   }

   configureHtmlFiles() {
      return HTML.compileFiles().pipe(dest(html.public)).pipe(browserSync.stream());
   }

   buildHtmlFiles() {
      return HTML.compileFiles()
         .pipe(
            htmlMin({
               collapseBooleanAttributes: true,
               collapseWhitespace: true,
               minifyCSS: true,
               minifyJS: true,
               removeComments: true,
               removeEmptyAttributes: true
            })
         )
         .pipe(htmlValidator.analyzer())
         .pipe(htmlValidator.reporter())
         .pipe(dest(html.build));
   }
}

export default new HTML();
