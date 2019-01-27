import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StaffTable from '../../components/StaffTable';
import AddEmployeeModal from '../../components/StaffTable/AddEmployeeModal';
import PersonalMenu from '../../components/PersonalMenu';
import AddButton from '../../components/AddButton';
import InjectStyles from '../../components/InjectStyles';
import { ManageStaffHeader } from './index.module.scss';
import ConfirmationModal from '../../components/ConfirmationModal';

class ManageStaff extends Component {
  constructor(props) {
    super(props);
    const { list } = props.users;
    this.state = {
      users: list,
      isOpen: false,
      deleteModalOpen: false,
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
      isOpen: true
    });
    console.log(this.state);
  };
  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };
  openEditModal = userId => {

  }
  openDeleteModal = userId => {


    this.setState({
      deleteModalOpen: true
    })
  }
  render() {
    const { isOpen, users, deleteModalOpen } = this.state;
    return (
      <>
        <ConfirmationModal
          label="Are you sure you want to delete this user?"
          isOpen={deleteModalOpen}
          onConfirm={() => { this.setState({ deleteModalOpen: false }); this.props.deleteUsers({ users: users.filter(user => user.checked) }) }}
          onCancel={() => { this.setState({ deleteModalOpen: false }); this.props.unSelectAllUsers() }}
        />
        <AddEmployeeModal isOpen={isOpen} onRequestClose={this.closeModal} />
        <div className={ManageStaffHeader}>
          <div />
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <PersonalMenu {...this.props.currentUser} />
            <AddButton onClick={this.openModal} />
          </div>
        </div>

        <StaffTable
          {...this.props}
          editModal={this.openEditModal}
          singleDeleteModal={(userId) => { this.props.unSelectAllUsers(); this.props.selectSingleUser(userId); this.openDeleteModal(); }}
          deleteModal={this.openDeleteModal}
          theme={this.props.config.theme}
          users={users}
        />
        <InjectStyles />
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
