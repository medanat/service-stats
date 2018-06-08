const { promisify } = require('util');

function parseInfoBlob(infoBlob) {
  const sections = infoBlob.trim().split('\r\n\r\n');

  return sections.reduce((acc, section) => {
    const lines = section.split('\r\n');

    acc[lines.shift().slice(2).toLowerCase()] = lines.reduce((acc, line) => {
      const [key, value] = line.split(':');

      acc[key] = value;

      return acc;
    }, {});

    return acc;
  }, {});
}

function info(redis) {
  return Promise.all([
    promisify(redis.dbsize).bind(redis)(),
    promisify(redis.info).bind(redis)('all')
  ])
    .then(([dbsize, infoBlob]) => ({
      dbsize,
      ...parseInfoBlob(infoBlob)
    }));
}

module.exports = info;
