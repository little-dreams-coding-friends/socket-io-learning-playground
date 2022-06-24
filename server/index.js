const express = require('express');
const app = express();
const http = require('http');
const server =http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 5000;

//Todo get path to public build;
app.use(express.static('socket-io-learning/public'));

app.get('/', (req, res) => {
  console.log('Some one is here lol');
  res.status(200).send();
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});