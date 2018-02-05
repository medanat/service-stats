function info(redis) {
  return new Promise((resolve, reject) => {
    redis.dbsize((err, dbsize) => {
      if (err) {
        return reject(err);
      }

      return resolve({
        dbsize
      });
    });
  });
}

module.exports = info;
