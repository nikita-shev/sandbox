import { path } from './bundler/settings.js';

import gulp from 'gulp';
import startServer from './bundler/tasks/server.js';

global.app = { path };
const { series, parallel } = gulp;

function defaultTask(cb) {
   console.log(app);

   cb();
}

export default series(defaultTask, parallel(startServer));
