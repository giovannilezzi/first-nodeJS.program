/* const Logger = require('./logger');
const logger = new Logger()

// Register a listener
logger.on('messageLogged', (arg) => {

    console.log('listener called', arg);
});

logger.log('message') */

const Http = require('http');

const server = http = Http.createServer((req, res) => {

    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        const obj = {id:1 , name: "prove", surname: 'pluto'};
        console.log(obj.id, obj.name);
        res.write(JSON.stringify(obj));
        res.end();
    }

}); // è un EventEmitter

/* server.on('connection', (socket) => {
    console.log('New Connection.....')
}) */

server.listen(3000);

console.log('listening on port 3000');

// server.emit();