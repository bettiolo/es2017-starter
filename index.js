// This file is used to transition from ES5 to ES2017
var debug = require('debug');
var log = debug('app:es5:warn');
var warn = debug('app:es5:warn');

require('blocked')(function (ms) {
  warn('Event loop blocked for %sms', ms | 0);
});

log('Transpiling...');
require('babel-register');
require('./src/index');
