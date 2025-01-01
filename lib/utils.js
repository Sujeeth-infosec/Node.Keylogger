// Utility functions
const encodeData = (data) => Buffer.from(data, 'base64');

const processKeyEvent = (data) => ({
  timestamp: Math.floor(Date.now() / 1000),
  key: data.toString().trim()
});

module.exports = {
  encodeData,
  processKeyEvent
};