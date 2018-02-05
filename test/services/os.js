const { expect } = require('chai'),
      { os } = require('../../src/services');

describe('os', () => {
  it('reports os related attributes', () => {
    expect(os())
      .to.have.keys('details', 'cpuCount', 'uptime', 'freeMemory', 'totalMemory');
  });
});
