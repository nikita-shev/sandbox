import { buildFolder } from '../settings.js';
import { deleteSync } from 'del';

const deleteFiles = (cb) => {
   deleteSync([`${buildFolder}/**/*`, `!${buildFolder}/fonts`, `!${buildFolder}/fonts/**/*.*`]);
   cb();
};

export default deleteFiles;
