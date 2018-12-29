const { expect } = require('chai'),
      { custom: Pm2 } = require('pm2'),
      { pm2 } = require('../../src/services');

describe('pm2', () => {
  it('reports pm2 related attributes', done => {
    pm2(new Pm2({
      daemon_mode: false
    }))
      .then(data => {
        expect(data).to.have.keys('currentApp', 'ids', 'processes');

        done();
      })
      .catch(done);
  });
});
