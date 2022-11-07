import { buildFolder } from '../settings.js';
import browserSync from 'browser-sync';

const startServer = () => {
   browserSync.init({
      server: {
         baseDir: `./${buildFolder}/`
      },
      notify: false
   });
};

export default startServer;
