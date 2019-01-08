import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import styled, { css } from 'styled-components';
import dropdownCaretDown from '../../assets/caret-down-custom.svg';
import dropdownCaretUp from '../../assets/caret-up-custom.svg';
import btnOwnerImage from '../../assets/btn-owner.svg';
import ownerImage from '../../assets/owner.svg';
import Checkbox from '../Checkbox';
import BaseInput from '../form/BaseInput';
import ConsultantLabel from '../Consultant';

const Container = styled.div`
  border-bottom: solid 1px #d8d8d8;
  position: relative;

  ${props =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

const PickContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  cursor: pointer;
`;

const Placeholder = styled.div`
  color: #7d7d7d;
  font-size: 15px;
`;

const ArrowIcon = styled.img`
  width: 13px;
  height: 8px;
`;

const Dropdown = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: calc(100% + 5px);
  background-color: #fff;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  z-index: 10;
`;

const Consultant = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1px 0px;

  &:hover {
    background-color: #fafafa;

    .assign-badge {
      display: inline-block;
    }
  }

  ${props =>
    props.picked &&
    css`
      background-color: #c0b59d33;

      &:hover {
        background-color: #c0b59d33;
      }
    `}

  .assign-badge {
    height: 20px;
    cursor: pointer;
    object-fit: contain;
    display: none;
  }

  ${props =>
    props.isOwner &&
    css`
      .assign-badge {
        display: inline-block;
      }
    `}
`;

const Group = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

class ConsultantsPicker extends PureComponent {
  state = {
    isOpen: false
  };

  getEmployeeById = id => this.props.employees.filter(emp => emp.id === id)[0] || {};

  handleToggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  handleEmployeeChecked = (employeeId, owner = false) => {
    const value = this.props.input.value || {
      picked: [],
      owner: null
    };

    this.props.input.onChange({
      ...value,
      picked: [...value.picked.filter(id => id !== employeeId), employeeId],
      owner: owner ? employeeId : value.owner
    });
  };

  handleEmployeeUnchecked = employeeId => {
    const { value } = this.props.input;

    this.props.input.onChange({
      picked: value.picked.filter(id => id !== employeeId),
      owner: value.owner === employeeId ? null : value.owner
    });
  };

  handleAssignClicked = employeeId => {
    const value = this.props.input.value || {
      picked: [],
      owner: null
    };
    const isOwner = employeeId === value.owner;
    if (isOwner) {
      // Remove from owner
      this.props.input.onChange({
        picked: [...value.picked],
        owner: null
      });
    } else {
      // Make owner
      this.handleEmployeeChecked(employeeId, true);
    }
  };

  render() {
    const value = this.props.input.value || {
      picked: [],
      owner: null
    };
    return (
      <BaseInput label="Consultant:" {...this.props}>
        <Container {...this.props}>
          <PickContainer onClick={this.handleToggle}>
            <Placeholder>
              {value.picked.length === 0
                ? 'Pick a staff'
                : value.picked.map(id => (
                    <Group key={id} style={{ margin: '10px 0px' }}>
                      <ConsultantLabel
                        name={this.getEmployeeById(id).name}
                        picture={this.getEmployeeById(id).picture}
                      />
                      {value.owner === id && <Img src={ownerImage} />}
                    </Group>
                  ))}
            </Placeholder>
            <ArrowIcon src={this.state.isOpen ? dropdownCaretUp : dropdownCaretDown} />
          </PickContainer>
          {this.state.isOpen && (
            <Dropdown>
              {this.props.employees.map(employee => {
                const { value } = this.props.input;
                const isPicked = value && value.picked.indexOf(employee.id) !== -1;
                const isOwner = value.owner === employee.id;
                return (
                  <Consultant picked={isPicked} isOwner={isOwner} key={employee.id}>
                    <Group>
                      <Checkbox
                        checked={isPicked}
                        onUncheck={() => this.handleEmployeeUnchecked(employee.id)}
                        onCheck={() => this.handleEmployeeChecked(employee.id)}
                      />
                      <ConsultantLabel picture={employee.picture} name={employee.name} />
                    </Group>
                    <Group>
                      <Img
                        alt=""
                        className="assign-badge"
                        src={isOwner ? ownerImage : btnOwnerImage}
                        onClick={() => this.handleAssignClicked(employee.id)}
                      />
                    </Group>
                  </Consultant>
                );
              })}
            </Dropdown>
          )}
        </Container>
      </BaseInput>
    );
  }
}

export default compose(
  firebaseConnect(() => [
    {
      path: 'employees',
      queryParams: ['orderByChild=venueId', 'equalTo=test_venue']
    }
  ]),
  connect(state => ({
    employees: state.firebase.data.employees
      ? Object.keys(state.firebase.data.employees).map(key => ({
          id: key,
          name: state.firebase.data.employees[key].fullName,
          picture: state.firebase.data.employees[key].picture
        }))
      : []
  }))
)(ConsultantsPicker);
