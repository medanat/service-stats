const { expect } = require('chai'),
      io = require('socket.io'),
      { socketio } = require('../../src/services');

describe('socketio', () => {
  it('reports socketio related attributes', () => {
    expect(socketio(io(require('http').createServer()))).to.eql({
      clients: [],
      clientsCount: 0,
      transports: ['polling', 'websocket'],
      wsEngine: 'ws'
    });
  });
});
