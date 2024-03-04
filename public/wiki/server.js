/*import { createServer } from 'node:http';
const hostname = '127.0.0.1';
const port = 3030;

// This example starts a pretty dumb server that just says Hello.
// You can use: npm install -g http-server ... which installs the server on local machine
// and then can be executed using the command : http-server
// TODO: how to convigure this server for https and CORS etc.
// What about filtering? Much to do.
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

import express from 'express';
const app = express();
const port = 3001; // or any other port you prefer

app.get('/api/data', (req, res) => {
  // Handle your API logic here
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

