const http = require('http');
const app = require('./app/app.js');

const PORT = 3000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`News app is listening on port ${PORT}!`));