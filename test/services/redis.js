const { expect } = require('chai'),
      { redis } = require('../../src/services');

describe('redis', () => {
  it('reports redis related attributes', done => {
    redis(require('redis').createClient())
      .then(data => {
        expect(data).to.have.keys('dbsize', 'clients', 'cluster',
          'commandstats', 'cpu', 'keyspace', 'memory', 'persistence',
          'replication', 'server', 'stats');
        expect(data.dbsize).to.be.a('number');

        done();
      })
      .catch(done);
  });
});
