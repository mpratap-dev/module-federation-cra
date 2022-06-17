import Header from "nav/Header";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="https://webpack.js.org/concepts/module-federation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Module federation
          </a>  implementation with React 18 and CRA
        </p>
        
      </header>
    </div>
  );
}

export default App;

