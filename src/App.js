import logo from './quism.svg';
import './App.css';
import Box from './box.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
