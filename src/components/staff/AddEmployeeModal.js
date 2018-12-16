import React, { PureComponent } from 'react';
import { withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import Checkbox from '../Checkbox';
import Modal from '../Modal';
import Button from '../Button';
import Input from '../form/Input';
import BaseInput from '../form/BaseInput';
import calendarViewBlackIcon from 'assets/calendar-view-black.svg';
import calendarEditBlackIcon from 'assets/calendar-edit-black.svg';
import calendarDeleteBlackIcon from 'assets/calendar-delete-black.svg';
import billBlackIcon from 'assets/bill-black.svg';
import peopleBlackIcon from 'assets/people-black.svg';

const Header = styled.div`
  background-color: ${props => props.theme.colors.primary}66;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-size: 24px;
  text-align: center;
  color: #181818;
`;

const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

const Content = styled.div`
  padding: 50px;
`;

const PermissionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
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
    isLoading: false,
  };

  handleCreateEmpoyee = async ({ fullName, email }) => {
    const { firebase } = this.props;
    const createEmployee = firebase
      .functions()
      .httpsCallable('createEmployee');

    const { isLoading, ...permissions } = this.state;

    this.setState({ isLoading: true });

    await createEmployee({
      fullName,
      email,
      permissions,
    });

    this.setState({ isLoading: false });
    this.props.onRequestClose();
  };

  render() {
    const { isOpen, onRequestClose } = this.props;
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} bottom="initial">
        <Header>
          <div>Add New Employee</div>
        </Header>

        <Content>
          <Field
            name="fullName"
            label="Full name:"
            component={Input}
          />

          <Field
            name="email"
            label="Email:"
            component={Input}
            type="email"
          />

          <BaseInput label="Permissions:">
            <PermissionItem>
              <Checkbox
                onCheck={() => this.setState({ viewEventsOnly: true })}
                onUncheck={() => this.setState({ viewEventsOnly: false })}
                checked={this.state.viewEventsOnly}
              />
              <Icon src={calendarViewBlackIcon} />
              <div>View events only</div>
            </PermissionItem>
            <PermissionItem>
              <Checkbox
                onCheck={() => this.setState({ createAndEditEvents: true })}
                onUncheck={() => this.setState({ createAndEditEvents: false })}
                checked={this.state.createAndEditEvents}
              />
              <Icon src={calendarEditBlackIcon} />
              <div>Create & Edit Events</div>
            </PermissionItem>
            <PermissionItem>
              <Checkbox
                onCheck={() => this.setState({ deleteEvents: true })}
                onUncheck={() => this.setState({ deleteEvents: false })}
                checked={this.state.deleteEvents}
              />
              <Icon src={calendarDeleteBlackIcon} />
              <div>Delete Events</div>
            </PermissionItem>
            <PermissionItem>
              <Checkbox
                onCheck={() => this.setState({ viewBilling: true })}
                onUncheck={() => this.setState({ viewBilling: false })}
                checked={this.state.viewBilling}
              />
              <Icon src={billBlackIcon} />
              <div>View Billing</div>
            </PermissionItem>
            <PermissionItem>
              <Checkbox
                onCheck={() => this.setState({ manageStaffPermissions: true })}
                onUncheck={() => this.setState({ manageStaffPermissions: false })}
                checked={this.state.manageStaffPermissions}
              />
              <Icon src={peopleBlackIcon} />
              <div>Manage Staff Permissions</div>
            </PermissionItem>
          </BaseInput>
        </Content>

        <Modal.Footer>
          <StyledButton
            label="Discard"
            onClick={onRequestClose}
          />
          <StyledButton
            label={this.state.isLoading ?
              'Creating account...' :
              'Create account'}
            kind="primary"
            onClick={this.props.handleSubmit(this.handleCreateEmpoyee)}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}

export default compose(
  reduxForm({
    form: 'AddEmployeeModal',
  }),
  withFirebase,
)(AddEmployeeModal);
