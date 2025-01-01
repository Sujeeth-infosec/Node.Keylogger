const fs = require('fs');
const { EVENTS } = require('../constants');
const { encodeData } = require('../utils');

class LinuxMonitor {
  constructor(device) {
    this.device = device;
    this.stream = null;
  }

  start(emitter) {
    try {
      this.stream = fs.createReadStream(`/dev/input/${this.device}`);
      this.stream.on(EVENTS.DATA, data => 
        emitter.emit(EVENTS.KEY, encodeData(data))
      );
      this.stream.on(EVENTS.ERROR, error => 
        emitter.emit(EVENTS.ERROR, error)
      );
    } catch (error) {
      emitter.emit(EVENTS.ERROR, error);
    }
  }

  stop() {
    if (this.stream) {
      this.stream.destroy();
    }
  }
}

module.exports = LinuxMonitor;