import { path } from '../settings.js';

import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import { htmlValidator } from 'gulp-w3c-html-validator';
import htmlMin from 'gulp-htmlmin';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { html } = path;

const configureHtmlFiles = () => {
   const folder = process.env.NODE_ENV === 'development' ? html.public : html.build;

   return src(html.src)
      .pipe(fileInclude())
      .pipe(htmlValidator.analyzer())
      .pipe(htmlValidator.reporter())
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
      .pipe(dest(folder))
      .pipe(browserSync.stream());
};

export default configureHtmlFiles;
