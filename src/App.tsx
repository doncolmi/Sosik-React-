import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Hello, Bye } from "./component/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="it's me" age={24} />
        <Bye name="It's you" age={25} />
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
