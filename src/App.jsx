import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Top from './components/Top';
import Logout from './Auth/Logout';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ManageStaff from './pages/ManageStaff';
import AddEmployeeModal from './components/StaffTable/AddEmployeeModal';
import Events from './pages/Events';
// import Billing from './pages/Billing';
import { SignInPage } from './pages/SignIn';
import * as actions from './actions';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) this.props.loginWithTokenRequest({ access_token });
  }
  render() {
    return (
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
                  <Route path="/manageStaff" component={ManageStaff} />
                </Switch>
              </Dashboard>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  // eslint-disable-next-line prettier/prettier
  () => { },
  mapDispatchToProps
)(App);
