// Module Syntax + Async example

import debug from 'debug';
const log = debug('app:example');

async function asyncTimeout(delay = 100) {
  log(`Waiting for ${delay}ms`);
  return new Promise((resolve) => {
    setTimeout(() => {
      log(`Timeout: ${delay}ms`);
      resolve();
    }, delay);
  });
}

async function fancyFoo() {
  await asyncTimeout(100);
  return 'Async FOO :)';
}

export default () => fancyFoo().then(log);
