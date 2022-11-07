const srcFolder = 'src';
const buildFolder = 'public';

const path = {
   html: {
      public: `${buildFolder}/`,
      src: [`${srcFolder}/**/*.html`, `!${srcFolder}/**/_*.html`],
      watch: `${srcFolder}/**/*.html`
   },
   css: {
      public: `${buildFolder}/css/`,
      src: `${srcFolder}/styles/main.sass`,
      watch: `${srcFolder}/styles/**/*.+(scss|sass)`
   },
   js: {
      public: `${buildFolder}/js/`,
      src: `${srcFolder}/js/main.js`,
      watch: `${srcFolder}/js/**/*.js`
   },
   images: {
      public: `${buildFolder}/images/`,
      src: `${srcFolder}/images/**/*.+(png|jpg|gif|ico|webp)`,
      watch: `${srcFolder}/images/**/*.+(png|jpg|gif|ico|svg|webp)`
   },
   svg: {
      public: `${buildFolder}/images/`,
      src: `${srcFolder}/images/icons/**/*.svg`,
      watch: `${srcFolder}/images/icons/**/*.svg`
   },
   fonts: {
      public: `${buildFolder}/fonts/`,
      src: `${srcFolder}/fonts/**/*.ttf`,
      watch: `${srcFolder}/fonts/**/*.ttf`
   }
};

export { path };
