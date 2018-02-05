const { version, env: { NODE_ENV: env } } = process;

function info() {
  return {
    env,
    version
  };
}

module.exports = info;
