import React from 'react';
import './App.scss';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

import Top from './components/Top';
import Logout from './Auth/Logout';
import Dashboard from './components/Dashboard/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import ManageStaff from './pages/ManageStaff';
import Events from './pages/Events';
import { SignInPage } from './pages/SignIn';

const App = () => (
  <div>
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/login" component={SignInPage} />
          <Route path="/logout" component={Logout} />
          <Dashboard>
            <Route path="/events" component={Events} />
            <Route path="/manageStaff" component={ManageStaff} />
            <Switch>{/* <PrivateRoute path="/events" component={Events} /> */}</Switch>
          </Dashboard>
        </Switch>
      </Router>
    </main>
  </div>
);

export default App;
