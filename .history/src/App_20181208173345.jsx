import React, { Component } from 'react';
import './App.css';
import auth0 from 'auth0-js';
import routes from '../routes';
mport firebase from 'firebase';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createHashHistory } from 'history';

const auth1 = new auth0.WebAuth({
  domain: 'venuex-ds-test',
  clientID: '3f6HzzVeEtLDRMYT7Lb2cMDX97884GFD',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid'
});
class App extends Component {
  constructor(...args) {
    super(...args);

    const history = createHashHistory();

    this.state = {
      
    };
  }
  componentDidMount() {}

  render() {
    return <h1>fuck the world</h1>;
  }
}

export default App;
