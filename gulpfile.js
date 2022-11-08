import gulp from 'gulp';
import startServer from './bundler/tasks/server.js';
import deleteFiles from './bundler/tasks/clear.js';
import configureHtmlFiles from './bundler/tasks/html.js';
import images from './bundler/tasks/Images.js';

const { series, parallel } = gulp;
const { convertToWebp, optimizeImages, createSvgSprite } = images;

export default series(
   deleteFiles,
   parallel(configureHtmlFiles),
   parallel(convertToWebp, optimizeImages, createSvgSprite),
   parallel(startServer)
);
