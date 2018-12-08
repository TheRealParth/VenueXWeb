import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router';
import Header from './components/Header';

import Top from './components/Top';
import Private from './components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </main>
  </div>
);

export default App;
