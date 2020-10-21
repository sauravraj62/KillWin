/*
    Core Modules of Node.js
    1. http : Launch a server, send requests
    2. https : Launch a SSL Server
    3. fs : File System
    4. path
    5. os
 */

const http = require('http'); // import http module

const server = http.createServer((req, res) => {
    console.log('Server pinged');
});

server.listen(3000);
// Now listen to localhost:3000