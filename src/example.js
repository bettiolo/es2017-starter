// Module Syntax + Async example

import debug from 'debug';
const log = debug('app:example');

export default function() {
  fancyFoo().then(message => log(message));
}

async function asyncTimeout(delay = 100) {
  log(`Waiting for ${delay}ms`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      log(`Timeout: ${delay}ms`);
      resolve();
    }, delay);
  });
}

async function fancyFoo() {
  await asyncTimeout(100);
  return 'foo';
}
