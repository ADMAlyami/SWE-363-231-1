
const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

// Export the event emitter
module.exports = new UserEventEmitter();
