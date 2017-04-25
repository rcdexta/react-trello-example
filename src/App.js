import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Board} from 'react-trello'

const data = require('./data.json')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Trello Demo</h2>
        </div>
        <p className="App-intro">
          <Board data={data} />
        </p>
      </div>
    );
  }
}

export default App;
