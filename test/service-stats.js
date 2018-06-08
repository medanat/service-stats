const { expect } = require('chai'),
      sinon = require('sinon'),
      serviceStats = require('../'),
      services = require('../src/services');

describe('service-stats', () => {
  describe('#report', () => {
    it('only reports the services selected', done => {
      const redis = require('redis').createClient(),
            pm2Stub = sinon.stub(services, 'pm2'),
            redisStub = sinon.stub(services, 'redis');

      serviceStats({ node: true, os: true, redis })
        .report()
        .then(data => {
          expect(data).to.have.keys('node', 'os', 'redis');

          expect(data.node).to.eql({
            env: 'test',
            version: 'v8.10.0'
          });

          expect(redisStub.called).to.be.true;
          expect(pm2Stub.called).to.be.false;

          done();
        })
        .catch(done);
    });

    it('ignores unknown services', done => {
      serviceStats({ node: true, sos: true })
        .report()
        .then(data => {
          expect(data).to.eql({
            node: {
              env: 'test',
              version: 'v8.10.0'
            }
          });

          done();
        })
        .catch(done);
    });

    it('returns an empty result set when no services are selected', done => {
      serviceStats()
        .report()
        .then(data => {
          expect(data).to.eql({});

          done();
        })
        .catch(done);
    });
  });
});
