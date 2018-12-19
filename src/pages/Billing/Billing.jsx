import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BillingTable from '../../components/BillingTable';
class Billing extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const { users } = this.props;
    return (
      <>
        <BillingTable users={users} />;
      </>
    );
  }
}

Billing.propTypes = {
  classes: PropTypes.object.isRequired
};

Billing.defaultProps = {
  users: []
};

export { Billing };
