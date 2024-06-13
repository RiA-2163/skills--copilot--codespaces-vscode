// Create web server
 var http = require('http');

// Create web server
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
});

// Listen on port 3000
server.listen(3000, '');