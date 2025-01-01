const Monitor = require('./monitor');
module.exports = (device = '') => new Monitor(device);