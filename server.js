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
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html'); // make response type as html
    // creating html response
    res.write('<html>');
    res.write('<head><title>Saurav Raj</title></head>');
    res.write('<body><h1>This is my First response from server.</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit(); // it stops the running server
});

server.listen(3000);
// Now listen to localhost:3000