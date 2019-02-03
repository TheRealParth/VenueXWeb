import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import { get } from 'lodash';
import Checkbox from '../../Checkbox';
import Modal from '../../Modal';
import Button from '../../Button';
import Input from '../../form/Input';
import SmallInput from '../../form/SmallInput';
import BaseInput from '../../form/BaseInput';
import calendarViewBlackIcon from '../../../assets/calendar-view-black.svg';
import calendarEditBlackIcon from '../../../assets/calendar-edit-black.svg';
import calendarDeleteBlackIcon from '../../../assets/calendar-delete-black.svg';
import billBlackIcon from '../../../assets/bill-black.svg';
import peopleBlackIcon from '../../../assets/people-black.svg';
import Icons from '../../../assets/icons';
import {
  EmployeeModalHeader,
  EmployeeModalContent,
  FormSection,
  FormSectionTitle,
  FormRow,
  PermissionItem
} from '../styles.module.scss';

const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
`;

class AddEmployeeModal extends PureComponent {
  state = {
    viewEventsOnly: false,
    createAndEditEvents: false,
    deleteEvents: false,
    viewBilling: false,
    manageStaffPermissions: false,
    isLoading: false
  };

  handleCreateEmpoyee = () => {
    const { isLoading, ...permissions } = this.state;
    const { email, fullName } = this.props;
    this.props.createUser({
      email,
      fullName,
      permissions,
      password: 'Welcome123'
    });
    this.props.onRequestClose();
  };

  render() {
    const { isOpen, onRequestClose } = this.props;
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} bottom="initial" width="610px">
        <div className={EmployeeModalHeader}>
          <div>Add New Employee</div>
        </div>

        <div className={EmployeeModalContent}>
          <div className={FormSection}>
            <div className={FormSectionTitle}>User Info</div>
            <div className={FormRow}>
              <Field name="fullName" placeholder="Full Name" component={SmallInput} />
              <Field name="email" placeholder="Email" component={SmallInput} type="email" />
            </div>
          </div>
          <div className={FormSection}>
            <div className={FormSectionTitle}> Permissions</div>
            <BaseInput>
              <div className={PermissionItem}>
                <Checkbox
                  onCheck={() => this.setState({ viewEventsOnly: true })}
                  onUncheck={() => this.setState({ viewEventsOnly: false })}
                  checked={true}
                />
                <Icons.CalendarBlank color="#7d7d7d" />
                <div> View Events</div>
              </div>
              <div className={PermissionItem}>
                <Checkbox
                  onCheck={() => this.setState({ createAndEditEvents: true })}
                  onUncheck={() => this.setState({ createAndEditEvents: false })}
                  checked={this.state.createAndEditEvents}
                />
                <Icons.CalendarEdit color="#7d7d7d" />
                <div> Create & Edit Events</div>
              </div>
              <div className={PermissionItem}>
                <Checkbox
                  onCheck={() => this.setState({ deleteEvents: true })}
                  onUncheck={() => this.setState({ deleteEvents: false })}
                  checked={this.state.deleteEvents}
                />
                <Icons.CalendarDelete color="#7d7d7d" />
                <div>Delete Events</div>
              </div>
              <div className={PermissionItem}>
                <Checkbox
                  onCheck={() => this.setState({ viewBilling: true })}
                  onUncheck={() => this.setState({ viewBilling: false })}
                  checked={this.state.viewBilling}
                />
                <Icons.Billing color="#7d7d7d" />
                <div>View Billing</div>
              </div>
              <div className={PermissionItem}>
                <Checkbox
                  onCheck={() => this.setState({ manageStaffPermissions: true })}
                  onUncheck={() => this.setState({ manageStaffPermissions: false })}
                  checked={this.state.manageStaffPermissions}
                />
                <Icons.People color="#7d7d7d" />
                <div>Manage Staff Permissions</div>
              </div>
            </BaseInput>
          </div>
        </div>

        <Modal.Footer>
          <StyledButton label="Discard" onClick={onRequestClose} />
          <StyledButton
            label={this.props.isLoading ? 'Creating account...' : 'Create account'}
            kind="primary"
            onClick={this.handleCreateEmpoyee}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}

export { AddEmployeeModal };
