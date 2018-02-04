const { expect } = require('chai'),
      { os } = require('../../src/services');

describe('os', () => {
  it('reports os related attributes', () => {
    expect(os())
      .to.have.keys('info', 'cpuCount', 'uptime', 'freeMemory', 'totalMemory');
  });
});
