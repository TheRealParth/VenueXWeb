import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StaffTable from '../../components/StaffTable';
import AddEmployeeModal from '../../components/StaffTable/AddEmployeeModal';
import PersonalMenu from '../../components/PersonalMenu';
import AddButton from '../../components/AddButton';
import InjectStyles from '../../components/InjectStyles';
import { ManageStaffHeader } from './index.module.scss';
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

  render() {
    const { isOpen, users } = this.state;
    return (
      <>
        <AddEmployeeModal isOpen={isOpen} onRequestClose={this.closeModal} />
        <div className={ManageStaffHeader}>
          <div />
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <PersonalMenu {...this.props.currentUser} />
            <AddButton onClick={this.openModal} />
          </div>
        </div>

        <StaffTable {...this.props} theme={this.props.config.theme} users={users} />
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
