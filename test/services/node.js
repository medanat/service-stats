const { expect } = require('chai'),
      { node } = require('../../src/services');

describe('node', () => {
  it('reports node related attributes', () => {
    expect(node()).to.eql({
      env: 'test',
      version: 'v8.9.4'
    });
  });
});
