const monitor = require('../lib')();

monitor.on('k', event => console.log(event));
monitor.on('error', console.error);

process.on('SIGINT', () => {
  monitor.stop();
  process.exit();
});