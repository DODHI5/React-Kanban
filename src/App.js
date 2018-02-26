import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban</h1>
        </header>
        <p className="App-intro">What To Do</p>
      </div>
    );
  }
}

export default App;
