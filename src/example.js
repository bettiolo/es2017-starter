// Module Syntax + Async example
import assert from 'assert';
import debug from 'debug';
const log = debug('app:example');
const error = debug('app:example:error');

async function asyncTimeout(delay = 10) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('OK'), delay);
  });
}

async function test() {
  log('Array.prototype.includes');
  assert.ok(['a', 'b', 'c'].includes('a'));

  log('Exponentiation operator (**)');
  assert.equal(3 ** 2, Math.pow(3, 2));

  log('async functions');
  assert.equal(await asyncTimeout(), 'OK');
}

export default () => {
  // Using setTimeout to free the eventloop before testing
  setTimeout(() => {
    log('Testing...');
    test()
      .then(() => log('Completed.'))
      .catch(error);
  }, 0);
};
