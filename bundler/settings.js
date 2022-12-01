const { _src, _serve, _build } = { _src: 'src', _serve: 'public', _build: 'build' }; // folders

const path = {
   html: {
      build: `${_build}/`,
      public: `${_serve}/`,
      src: [`${_src}/**/*.html`, `!${_src}/**/_*.html`],
      watch: `${_src}/**/*.html`
   },
   css: {
      build: `${_build}/css/`,
      public: `${_serve}/css/`,
      src: `${_src}/styles/main.sass`,
      watch: `${_src}/styles/**/*.+(scss|sass)`
   },
   js: {
      build: `${_build}/js/`,
      public: `${_serve}/js/`,
      src: `${_src}/js/main.js`,
      watch: `${_src}/js/**/*.js`
   },
   images: {
      public: `${_serve}/images/`,
      src: `${_src}/images/**/*.+(png|jpg|gif|ico|webp)`,
      watch: `${_src}/images/**/*.+(png|jpg|gif|ico|svg|webp)`
   },
   svg: {
      public: `${_serve}/images/`,
      src: `${_src}/images/icons/**/*.svg`,
      watch: `${_src}/images/icons/**/*.svg`
   },
   fonts: {
      build: `${_build}/fonts`,
      public: `${_serve}/fonts`,
      src: `${_src}/fonts`,
      watch: `${_src}/fonts/**/*.ttf`
   }
};

export { path, _src, _serve, _build };
