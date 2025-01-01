const { spawn } = require('child_process');
const { EVENTS } = require('../constants');
const { encodeData, processKeyEvent } = require('../utils');

class WindowsMonitor {
  constructor() {
    this.process = null;
  }

  start(emitter) {
    try {
      this.process = spawn('powershell', ['-Command', 
        encodeData(process.env.PS_SCRIPT || '')
      ]);

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

module.exports = WindowsMonitor;