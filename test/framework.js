import assert from 'assert';

describe('(Framework) Karma Plugins', () => {

  it('Should expose "expect" globally', () => {
    assert.equal(typeof expect, 'function');
  });

  it('Should expose "should" globally', () => {
    assert.equal(typeof should, 'object');
  });

});
