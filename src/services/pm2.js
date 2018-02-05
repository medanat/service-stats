const { bytesToSize } = require('../helpers'),
      { instances, instance_var } = process.env,
      currentInstance = parseInt(process.env[instance_var], 10) + 1;

function info(pm2) {
  return new Promise((resolve, reject) => {
    pm2.list((err, data) => {
      if (err) {
        return reject(err);
      }

      const ids = Object.keys(data);

      return resolve({
        currentApp: {
          currentInstance,
          instances
        },
        ids,
        processes: ids.map(id => {
          const {
            name, pid, monit: { memory, cpu },
            pm2_env: { instances, pm_uptime, status, unstable_restarts: unstableRestarts, restart_time: restarts }
          } = data[id];

          return {
            name,
            id,
            pid,
            cpu: `${cpu} %`,
            memory: bytesToSize(memory),
            instances,
            prcoessStartTime: new Date(pm_uptime).toUTCString(),
            status,
            unstableRestarts,
            restarts
          };
        })
      });
    });
  });
}

module.exports = info;
