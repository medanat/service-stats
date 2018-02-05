const os = require('os'),
      ms = require('ms'),
      { bytesToSize } = require('../helpers');

function info() {
  return {
    details: `${os.platform()} ${os.release()} ${os.arch()}`,
    uptime: ms(os.uptime() * 1000, { long: true }),
    cpuCount: os.cpus().length,
    freeMemory: bytesToSize(os.freemem()),
    totalMemory: bytesToSize(os.totalmem())
  };
}

module.exports = info;
