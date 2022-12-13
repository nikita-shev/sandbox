import { _serve, _build } from '../settings.js';
import { deleteSync } from 'del';

const deleteFiles = (cb) => {
   const status = process.env.NODE_ENV;
   const folder = status === 'development' ? _serve : _build;
   const patterns = {
      development: [`${folder}/**/*`, `!${folder}/fonts`, `!${folder}/fonts/**/*.*`],
      production: [`${folder}/**/*`]
   };

   deleteSync(patterns[status]);
   cb();
};

export default deleteFiles;
