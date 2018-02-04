function info() {
  return {
    env: process.env.NODE_ENV,
    version: process.version
  };
}

module.exports = info;
