const { expect } = require('chai'),
      { redis } = require('../../src/services');

describe('redis', () => {
  it('reports redis related attributes', done => {
    redis(require('redis').createClient())
      .then(data => {
        expect(data).to.have.keys('dbsize');
        expect(data.dbsize).to.be.a('number');

        done();
      })
      .catch(done);
  });
});
