import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { get } from 'lodash';

function mapStateToProps(props) {
  return props;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props.user);
      return !get(props, 'user.uid', false) ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/events'
          }}
        />
      )
      }
    }
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicRoute);
