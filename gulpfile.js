import { path } from './bundler/settings.js';

import gulp from 'gulp';

global.app = { path };
const { series } = gulp;

function defaultTask(cb) {
   console.log(app);

   cb();
}

export default series(defaultTask);
