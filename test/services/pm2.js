const { expect } = require('chai'),
      { pm2 } = require('../../src/services');

describe('pm2', () => {
  it('reports pm2 related attributes', done => {
    pm2(require('pm2'))
      .then(data => {
        expect(data).to.have.keys('ids', 'processes');

        done();
      })
      .catch(done);
  });
});
