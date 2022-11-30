import gulp from 'gulp';
import startServer from './bundler/tasks/server.js';
import deleteFiles from './bundler/tasks/clear.js';
import configureHtmlFiles from './bundler/tasks/html.js';
import configureStyleFiles from './bundler/tasks/css.js';
import js from './bundler/tasks/JavaScript.js';
import images from './bundler/tasks/Images.js';
import { convertTtf2Woff, convertTtf2Woff2, setFontFaceMixin } from './bundler/tasks/Fonts.js';

const { series, parallel } = gulp;
const { configureJsFiles } = js;
const { convertToWebp, optimizeImages, createSvgSprite } = images;

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
   parallel(startServer)
);
