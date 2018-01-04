import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Textbox } from './components/Textbox.js';
import { Heroes } from './components/Heroes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.displayText}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Textbox />
        <Heroes />
      </div>
    );
  }
}

export default App;
