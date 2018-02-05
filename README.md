# service-stats

A service stats reporter for debugging, analytics, monitoring, etc.


### Supported services
- node
- os
- pm2
- redis
- socketio

### Usage

```js
const pm2 = require('pm2'),
      redis = require('redis').createClient(),
      socketio = require('socket.io')(require('http').createServer()),
      serviceStats = require('service-stats');

// Only pass the services you want to report on
serviceStats({ node: true, os: true, pm2, redis, socketio })
  .report()
  .then(results => {
    console.log(results);

    /*
    {
      node: {
        env: 'test',
        version: 'v8.9.4'
      },
      os: {
        details: 'linux 4.4.0-112-generic x64',
        uptime: '3 days',
        cpuCount: 4,
        freeMemory: '196.7 MB',
        totalMemory: '3.8 GB'
      },
      pm2: {
        currentApp: {
          currentInstance: 1,
          instances: 1
        },
        ids: ['0'],
        processes: [{
          name: app,
          id: 0,
          pid: 1201,
          cpu: 0 %,
          memory: 94.0 MB,
          instances: 1,
          prcoessStartTime: Sat, 20 Jan 2018 16:08:43 GMT,
          status: online,
          unstableRestarts: 0,
          restarts: 0
        }]
      },
      redis: {
        dbsize: 720
      },
      socketio: {
        clients: ['enTdEZUm8YgOEGetAAAU'],
        clientsCount: 1,
        transports: ['polling', 'websocket'],
        wsEngine: 'uws'
      }
    }
    */
  });
```