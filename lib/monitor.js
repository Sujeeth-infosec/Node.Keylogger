const EventEmitter = require('events');
const { PLATFORMS } = require('./constants');
const LinuxMonitor = require('./platforms/linux');
const MacMonitor = require('./platforms/mac');
const WindowsMonitor = require('./platforms/windows');

class Monitor extends EventEmitter {
  constructor(device = '') {
    super();
    this.device = device;
    this.platform = null;
    this.initialize();
  }

  initialize() {
    const platform = process.platform;
    
    if (platform === PLATFORMS.DARWIN) {
      this.platform = new MacMonitor();
    } else if (platform === PLATFORMS.WIN32) {
      this.platform = new WindowsMonitor();
    } else {
      this.platform = new LinuxMonitor(this.device);
    }

    this.platform.start(this);
  }

  stop() {
    if (this.platform) {
      this.platform.stop();
    }
  }
}

module.exports = Monitor;