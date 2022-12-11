let { expect } = require('chai');

function doSomethingAsync(callback) {
  setTimeout(() => {
    callback('done!');
  }, 100);
}

describe('doSomethingAsync', () => {
  it('does something asynchronous', () => {
    doSomethingAsync(result => {
      expect(result).to.equal('done!!!!');
    });
  });
});