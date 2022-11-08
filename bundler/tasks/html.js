import { path } from '../settings.js';

import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { html } = path;

const configureHtmlFiles = () => {
   return src(html.src).pipe(fileInclude()).pipe(dest(html.public)).pipe(browserSync.stream());
};

export default configureHtmlFiles;
