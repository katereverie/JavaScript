import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <User userName='Jiantao Zhang' tweet="I've injuried my lower back, T-T"/>
      <User userName="Christopher Hindermeyer" tweet="I found a wonderful recipe!"/>
      <User userName="Qiuqiu" tweet="Meow~~~!"/>
      <User userName="Jacko" tweet="Look at my piggy!" userRealName="Jacko Hindermeyer"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 1 + 1
        </a>
      </header>
    </div>
  );
}

export default App;
