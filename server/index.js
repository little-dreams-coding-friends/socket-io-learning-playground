const express = require('express');
const app = express();
const http = require('http');
const server =http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3000;

//Todo get path to public build;
app.use(express.static());