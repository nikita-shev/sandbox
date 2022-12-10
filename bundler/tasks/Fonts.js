import { path, _src } from '../settings.js';

import fs from 'fs';
import gulp from 'gulp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import browserSync from 'browser-sync';

const { src, dest } = gulp;
const { fonts } = path;

const fontWeight = {
   Thin: 100,
   ExtraLight: 200,
   Light: 300,
   Regular: 400,
   Medium: 500,
   SemiBold: 600,
   Bold: 700,
   ExtraBold: 800,
   Black: 900
};

class Fonts {
   static createFolder(folder) {
      const isFolder = fs.existsSync(folder);

      if (!isFolder) {
         fs.mkdirSync(folder);
      }
   }

   static deleteFonts(folder, fontType) {
      const files = fs.readdirSync(folder).filter((file) => file.endsWith(`.${fontType}`));

      if (files.length) {
         files
            .map((file) => `${folder}/${file}`)
            .forEach((path) => {
               fs.unlinkSync(path);
            });
      }
   }

   static checkFontsCount(folder, fontType) {
      const srcFiles = fs.readdirSync(fonts.src);
      const buildFiles = fs.readdirSync(folder).filter((file) => file.endsWith(`.${fontType}`));

      return srcFiles.length !== buildFiles.length;
   }

   convertFonts(fontType) {
      const folder = process.env.NODE_ENV === 'development' ? fonts.public : fonts.build;

      return function convertFonts(cb) {
         Fonts.createFolder(folder);

         const plugins = { woff: ttf2woff, woff2: ttf2woff2 };
         const isDifference = Fonts.checkFontsCount(folder, fontType);

         if (isDifference) {
            Fonts.deleteFonts(folder, fontType);

            return src(`${fonts.src}/*.ttf`)
               .pipe(plugins[fontType]())
               .pipe(dest(folder))
               .pipe(browserSync.stream());
         }

         cb();
      };
   }

   setFontFaceMixin(cb) {
      const path = `${_src}/styles/mixins/parts/_fonts.sass`;
      const files = fs.readdirSync(fonts.src).map((file) => file.split('.')[0]);

      fs.writeFileSync(path, '');

      if (files.length) {
         files.forEach((fileName) => {
            const [name, weight, style] = fileName.split('-');

            fs.appendFile(
               path,
               `@include font("${name}", "${fileName}", "${fontWeight[weight] ?? '400'}", "${
                  style ?? 'normal'
               }")\r\n`,
               () => {}
            );
         });
      }

      cb();
   }
}

const { convertFonts, setFontFaceMixin } = new Fonts();
const convertTtf2Woff = convertFonts('woff');
const convertTtf2Woff2 = convertFonts('woff2');

export { convertTtf2Woff, convertTtf2Woff2, setFontFaceMixin };
