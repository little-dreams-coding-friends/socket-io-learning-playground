import './App.css';
import {io} from 'socket.io-client';
import React, {useState} from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState('');
  const socket = io('http://localhost:3001');
  socket.on('connect', () => {
    console.log('We have a front end connection');
  });
  //TODO: handle send message through socket
  const handleResponse = (response) => {
    console.log(response);
    setChat(response);
  };
  //TODO: handle receive message through socket
  const sendMessage = () => {
    socket.emit('chatMessage', message, handleResponse);
  };
  //TODO:handle message maker from user.
  const handleMessageState = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        This is where the messages will go.
      </header>
      <label htmlFor="message">Chat</label>
      <input type="text" id="message" value={message} onChange={handleMessageState}/>
      <button onClick={sendMessage}>
        Send Message
      </button>
      <div>{chat}</div>
    </div>
  );
}

export default App;
