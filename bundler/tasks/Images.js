import { path } from '../settings.js';

import gulp from 'gulp';
import webp from 'gulp-webp';
import imagemin, { gifsicle, mozjpeg, optipng } from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { images, svg } = path;

class Images {
   convertToWebp() {
      return src(images.src)
         .pipe(webp({ quality: 70 }))
         .pipe(dest(images.public))
         .pipe(browserSync.stream());
   }

   optimizeImages() {
      return src(images.src)
         .pipe(
            imagemin([
               gifsicle({ interlaced: true }),
               mozjpeg({ quality: 75, progressive: true }),
               optipng()
            ])
         )
         .pipe(dest(images.public))
         .pipe(browserSync.stream());
   }

   createSvgSprite() {
      return src(svg.src)
         .pipe(
            svgSprite({
               mode: {
                  stack: {
                     dest: 'icons',
                     sprite: 'icons.svg',
                     example: false
                  }
               }
            })
         )
         .pipe(dest(svg.public))
         .pipe(browserSync.stream());
   }
}

export default new Images();
