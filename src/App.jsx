import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import logo from './logo.svg';
import './App.css';

const store = configureStore();

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <div>
          hello
        </div>
      </Provider>
    );
  }
}

export default App;
