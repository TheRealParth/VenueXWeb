import React, { PureComponent } from 'react';
import { withFirebase } from 'react-redux-firebase';
import styled from 'styled-components';
import Dropdown from 'components/Dropdown';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import calendarViewBlackIcon from 'assets/calendar-view-black.svg';
import calendarEditBlackIcon from 'assets/calendar-edit-black.svg';
import calendarDeleteBlackIcon from 'assets/calendar-delete-black.svg';
import billBlackIcon from 'assets/bill-black.svg';
import peopleBlackIcon from 'assets/people-black.svg';


const StyledDropdown = styled(Dropdown)`
  right: 0px;
  left: 0px;
  width: initial;
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

const Container = styled.div`
  padding: 0px 15px;
  padding-top: 20px;
`;

const SaveSection = styled.div`
  padding: 10px 0px;
  margin-top: 20px;
  border-top: solid 1px #d8d8d8;
  text-align: center;

  .save {
    text-transform: uppercase;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }
`;


class EditStaffPermissionsDropdown extends PureComponent {

  state = {
    viewEventsOnly: false,
    createAndEditEvents: false,
    deleteEvents: false,
    viewBilling: false,
    manageStaffPermissions: false,
  };

  handleSave = async () => {
    const updates = {};
    this.props.selectedEmployees.forEach(empId => {
      Object.keys(this.state).forEach(permissionKey => {
        updates[`/employees/${empId}/permissions/${permissionKey}`] = this.state[permissionKey];
      });
    });

    await this.props.firebase.database().ref().update(updates);
  };

  render() {
    const { selectedEmployees } = this.props;
    return (
      <StyledDropdown
        toggle={
          <Button
            label={`Edit permission for ${selectedEmployees.length} staff members`}
          />
        }
      >
        <Container>
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

          <SaveSection>
            <div className="save" onClick={this.handleSave}>
              Save
            </div>
          </SaveSection>
        </Container>
      </StyledDropdown>
    );
  }
}

export default withFirebase(EditStaffPermissionsDropdown);
