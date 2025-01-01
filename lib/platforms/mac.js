const { spawn } = require('child_process');
const { EVENTS } = require('../constants');
const { encodeData, processKeyEvent } = require('../utils');

class MacMonitor {
  constructor() {
    this.process = null;
  }

  start(emitter) {
    try {
      this.process = spawn('xcrun', ['swift', '-'], {
        input: encodeData(process.env.SWIFT_SCRIPT || '')
      });

      this.process.stdout.on(EVENTS.DATA, data => 
        emitter.emit(EVENTS.KEY, processKeyEvent(data))
      );
      
      this.process.on(EVENTS.ERROR, error => 
        emitter.emit(EVENTS.ERROR, error)
      );
    } catch (error) {
      emitter.emit(EVENTS.ERROR, error);
    }
  }

  stop() {
    if (this.process) {
      this.process.kill();
    }
  }
}

module.exports = MacMonitor;