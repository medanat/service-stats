function info({ engine: { clients, clientsCount, wsEngine, transports } }) {
  return {
    clients: Object.keys(clients),
    clientsCount,
    transports,
    wsEngine
  };
}

module.exports = info;
