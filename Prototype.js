const http = require('http'); // Import the HTTP module

// Create a server object
const myserver = http.createServer(function (req, res) {

  // Set the response header with a status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write a response message to the client
  res.write('Hello World!');

  // End the response
  res.end();
});

// Make the server listen on port 80
myserver.listen(80, () => {
  console.log('Server is running on port 80...');
});
