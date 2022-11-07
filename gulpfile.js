import gulp from 'gulp';
import startServer from './bundler/tasks/server.js';
import images from './bundler/tasks/Images.js';

const { series, parallel } = gulp;
const { convertToWebp, optimizeImages, createSvgSprite } = images;

export default series(
   parallel(convertToWebp, optimizeImages, createSvgSprite),
   parallel(startServer)
);
