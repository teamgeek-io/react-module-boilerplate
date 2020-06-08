import "./App.css";

import React from "react";
import { ExampleComponent } from "react-module-boilerplate";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExampleComponent text="There" />
      </header>
    </div>
  );
}

export default App;
