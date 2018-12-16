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
    const { list } = props.users;
    this.state = {
      users: list
    };
  }
  componentDidMount() {
    this.props.getUsersRequest();
    this.props.setUsersSortKey('created', 'asc');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.sortedUsers !== prevState.users) {
      this.setState(
        {
          ...this.state,
          users: this.props.sortedUsers
        },
        () => {
          console.log(prevState.users);
          console.log(this.state.users);
        }
      );
    }
  }
  render() {
    const { users } = get(this, 'state', []);
    return <StaffTable users={users} />;
  }
}

ManageStaff.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

ManageStaff.defaultProps = {
  users: []
};

export { ManageStaff };
