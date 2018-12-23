import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StaffTable from '../../components/StaffTable';
import AddEmployeeModal from '../../components/StaffTable/AddEmployeeModal';

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

  componentDidUpdate(prevProps) {
    if (this.props.sortedUsers !== prevProps.sortedUsers) {
      this.setState({ users: this.props.sortedUsers });
    }
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    });
    console.log(this.state)
  }
  closeModal = () => {
    this.setState({
      isOpen: true,
    })
  }

  render() {
    const { isOpen, users } = this.state;
    return (
      <>
        <AddEmployeeModal isOpen={isOpen} onRequestClose={this.closeModal} />
        <StaffTable
          {...this.props}
          openModal={this.openModal}
          users={users}
        />
      </>
    );
  }
}

ManageStaff.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  sortedUsers: PropTypes.array.isRequired
};

ManageStaff.defaultProps = {
  users: [],
  isOpen: false,
  sortedUsers: []
};

export { ManageStaff };
