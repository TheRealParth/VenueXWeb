import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StaffTable from '../../components/StaffTable';
import { get } from 'lodash';
class ManageStaff extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentDidMount() {
    this.props.getUsersRequest();
    this.props.setUsersSortKey('fullName');
  }

  componentDidUpdate(prevProps, prevState) {
    const { list } = get(this, 'props.users', []);
    if (prevProps.sortedUsers !== list) {
      console.log(this.props);
    }
  }
  render() {
    const { users } = get(this, 'props', {});
    return <StaffTable users={users} />;
  }
}

ManageStaff.propTypes = {
  classes: PropTypes.object.isRequired
};

ManageStaff.defaultProps = {
  users: []
};

export { ManageStaff };
