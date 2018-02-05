const services = require('./services');

function serviceStats(selectedServices = {}) {
  const selectServicesNames = Object.keys(selectedServices)
          .filter(name => services[name]),
        reporters = selectServicesNames
          .map(name => () => services[name](selectedServices[name]));

  function report() {
    return Promise
      .all(reporters.map(reporter => reporter()))
      .then(results => Promise.resolve(selectServicesNames
        .reduce((acc, curr, index) => {
          acc[curr] = results[index];

          return acc;
        }, {})));
  }

  return { report };
}

module.exports = serviceStats;
