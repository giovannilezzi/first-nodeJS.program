// const url = 'http://mylogger.io/log';

const EventEmitter = require('events');

class Logger extends EventEmitter{

    log (message) {
        console.log('message: --->', message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'prova'});
    }
}



/* function log(message) {
    console.log('message: --->', message);
} */

module.exports = Logger;

// module.export.logger = log;