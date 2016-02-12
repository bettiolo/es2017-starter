// This file is used to transition from ES5 to ES2017
var warn = require('debug')('app:es5:warn');
require('blocked')(function (ms) {
  warn('Event loop blocked for %sms', ms | 0);
});

require('babel-register');
require('babel-polyfill');
require('./src/index');
