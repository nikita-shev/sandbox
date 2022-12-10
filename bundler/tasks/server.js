import { _serve as folder } from '../settings.js';
import browserSync from 'browser-sync';

const startServer = () => {
   browserSync.init({
      server: {
         baseDir: `./${folder}/`
      },
      notify: false
   });
};

export default startServer;
