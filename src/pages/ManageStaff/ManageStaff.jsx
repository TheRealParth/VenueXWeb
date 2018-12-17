import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StaffTable from '../../components/StaffTable';
import AddEmployeeModal from '../../components/StaffTable/AddEmployeeModal';
import { get } from 'lodash';
class ManageStaff extends Component {
  constructor(props) {
    super(props);
    const { list } = props.users;
    this.state = {
      users: list,
      isOpen: false
    };
  }
  componentDidMount() {
    this.props.getUsersRequest();
    this.props.setUsersSortKey('email', 'asc');
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
    const isOpen = this.state;
    return (
      <>
        {isOpen && <AddEmployeeModal />}
        <StaffTable users={users} />
      </>
    );
  }
}

ManageStaff.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  isOpen: PropTypes.bool
};

ManageStaff.defaultProps = {
  users: [],
  isOpen: false
};

export { ManageStaff };
