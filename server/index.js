const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3001;

app.use(express.static('socket-io-learning/build'));

app.get('/', (req, res) => {
  console.log('Some one is here lol');
  res.status(200).send();
});

io.on('connection', (socket) => {
  console.log('We got connection');
  socket.on('chatMessage', (data, cb) => {
    console.log('This is the socket data we recieved', data);
    cb(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});