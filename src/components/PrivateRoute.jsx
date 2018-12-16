import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get } from 'lodash';

import * as actions from '../actions';

function mapStateToProps(props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props.user);
      return get(props, 'user.uid', false) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
          //  state: { from: props.location }
        )
      }
    }
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
