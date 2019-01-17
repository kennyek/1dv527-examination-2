const dotenv = require('dotenv');
const http = require('http');
const app = require('./config/app');

dotenv.config({ path: 'variables.env' });

const server = http.createServer(app);

function handleServerStart() {
  console.log(`Server started on http://localhost:${process.env.PORT}/. Press Ctrl+C to exit.`);
}

server.listen(process.env.PORT, handleServerStart);
