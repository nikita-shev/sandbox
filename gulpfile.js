import { path } from './bundler/settings.js';

import gulp from 'gulp';
import startServer from './bundler/tasks/server.js';
import deleteFiles from './bundler/tasks/clear.js';
import html from './bundler/tasks/HTML.js';
import styles from './bundler/tasks/Styles.js';
import js from './bundler/tasks/JavaScript.js';
import images from './bundler/tasks/Images.js';
import { convertTtf2Woff, convertTtf2Woff2, setFontFaceMixin } from './bundler/tasks/Fonts.js';

const { html: HTML, css: CSS, js: JS, fonts: FONTS, images: IMAGES, svg: SVG } = path;
const { series, parallel, watch } = gulp;
const { configureHtmlFiles } = html;
const { configureStyleFiles } = styles;
const { configureJsFiles } = js;
const { convertToWebp, optimizeImages, createSvgSprite } = images;

const watchFiles = () => {
   watch(HTML.watch, configureHtmlFiles);
   watch(CSS.watch, configureStyleFiles);
   watch(JS.watch, configureJsFiles);
   watch(FONTS.watch, parallel(convertTtf2Woff, convertTtf2Woff2, setFontFaceMixin));
   watch(IMAGES.watch, parallel(convertToWebp, optimizeImages));
   watch(SVG.watch, createSvgSprite);
};

export default series(
   deleteFiles,
   parallel(
      configureHtmlFiles,
      configureStyleFiles,
      configureJsFiles,
      convertToWebp,
      optimizeImages,
      createSvgSprite,
      convertTtf2Woff,
      convertTtf2Woff2,
      setFontFaceMixin
   ),
   parallel(watchFiles, startServer)
);
