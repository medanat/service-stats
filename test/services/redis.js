const { expect } = require('chai'),
      { redis } = require('../../src/services');

describe('redis', () => {
  it('reports redis related attributes', done => {
    redis(require('redis').createClient({
      port: 6379,
      host: process.env.REDIS_HOST || '127.0.0.1',
      db: 6
    }))
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
