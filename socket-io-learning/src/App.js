import './App.css';
import {io} from 'socket.io-client';

function App() {
  const socket = io('http://localhost:3001');
  socket.on('connect', () => {
    console.log('We have a front end connection');
  });
  return (
    <div className="App">
      <header className="App-header">
        This is where the messages will go.
      </header>
    </div>
  );
}

export default App;
