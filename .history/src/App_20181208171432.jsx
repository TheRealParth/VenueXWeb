import React, { Component } from 'react';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <h1>
        Hello
      </h1>
    );
  }
}

export default App;
