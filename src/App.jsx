import React from 'react';
import './App.scss';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

import Top from './components/Top';
import Logout from './Auth/Logout';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ManageStaff from './pages/ManageStaff';
import Events from './pages/Events';
// import Billing from './pages/Billing';
import { SignInPage } from './pages/SignIn';
import FirebaseApp from './firebase';

const App = () => (
  <div>
    <main>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Top} />
          <PublicRoute path="/login" component={SignInPage} />
          <PrivateRoute path="/logout" component={Logout} />
          <Dashboard>
            <Switch>
               <PrivateRoute path="/events" component={Events} />
               <PrivateRoute path="/manageStaff" component={ManageStaff} />
               {/*<PrivateRoute path="/billing" component={Billing} />*/}
            </Switch>
          </Dashboard>
        </Switch>
      </Router>
    </main>
  </div>
);

export default App;
