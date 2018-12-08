import React, { Component } from 'react';
import './App.css';
import auth0 from 'auth0-js';
import routes from '../routes';
import firebase from '../firebase';

const auth1 = new auth0.WebAuth({
  domain: 'venuex-ds-test',
  clientID: '3f6HzzVeEtLDRMYT7Lb2cMDX97884GFD',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid'
});
class App extends Component {
  componentDidMount() {}

  render() {
    return <h1>fuck the world</h1>;
  }
}

export default App;
