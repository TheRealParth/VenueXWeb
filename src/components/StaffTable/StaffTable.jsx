import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox.js';
import Table from '../Table';
import styled from 'styled-components';
import moment from 'moment';
import Button from '../Button';
import Icons from '../../assets/icons';
import ConsultantLabel from '../Consultant';
import EditStaffPermissionsDropdown from './EditStaffPermissionsDropdown';

const Container = styled.div`
  border: solid 1px #ededed;
  background-color: #fafafa;
  padding: 0px 15px;
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    margin: 0px 5px;
  }
`;

const StyledTableRow = styled(Table.Row)`
  .actions {
    display: none;

    svg {
      margin: 0px 3px;
    }
  }

  &:hover {
    .actions {
      display: block;
    }
  }
`;

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
`;

const ArrowIcon = styled.img`
  height: 17px;
  object-fit: contain;
  margin: 0px 20px;
  cursor: pointer;
`;

const Stats = styled.div`
  background-color: #fff;
  margin: 15px 0px;
  border: solid 1px #fafafa;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Stat = styled.div`
  color: #181818;
  font-size: 15px;
  padding-left: 30px;
  margin-left: 30px;
  border-left: solid 1px #b0b0b0;
  font-family: Lora;
  font-weight: 500;

  &:first-child {
    border-left: none;
    margin-left: 0px;
    padding-left: 0px;
  }

  .label {
    color: #b0b0b0;
    font-weight: 500;
  }

  .value {
    font-size: 40px;
  }
`;

const TableContainer = styled.div`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: #222222;
  margin-bottom: 20px;
`;

const DueLabel = styled.span`
  color: ${props => props.color || '#b0b0b0'};
`;

const StaffTable = ({
  users,
  sort,
  setUsersSortKey,
  anyChecked,
  allChecked,
  selectAllUsers,
  unSelectAllUsers,
  selectSingleUser,
  unSelectSingleUser,
  selectedCount,
  deleteUsers,
  primary
}) => {
  return (
    <>
      <TableContainer>
        <Table>
          <Table.Row header>
            <Table.Cell width="5%">
              <Table.HeaderCell
                title={
                  <Checkbox
                    onCheck={selectAllUsers}
                    onUncheck={unSelectAllUsers}
                    checked={allChecked}
                  />
                }
              />
            </Table.Cell>
            {!anyChecked ? (
              <>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    onClick={() =>
                      setUsersSortKey('fullName', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    title={'Name'}
                    center
                    selected
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    onClick={() =>
                      setUsersSortKey('email', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    numeric
                    title="Email"
                    center
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell onClick={() => {}} title="Permissions" center noSort />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    onClick={() =>
                      setUsersSortKey('created', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    title="Date Added"
                    center
                  />
                </Table.Cell>
                <Table.Cell width="15%" />
              </>
            ) : (
              <>
                <Table.Cell width="80%">
                  <EditStaffPermissionsDropdown
                    selectedCount={selectedCount}
                    selectedEmployees={users.filter(user => user.checked)}
                  />
                  &nbsp;
                  <Button
                    label={`Delete ${selectedCount} staff member${selectedCount > 1 ? 's' : ''}`}
                    kind="danger"
                    onClick={() => deleteUsers({ users: users.filter(user => user.checked) })}
                  />
                </Table.Cell>
              </>
            )}
          </Table.Row>
          <Table.Body>
            {users.map(user => (
              <StyledTableRow key={user.id}>
                <Table.Cell width="5%">
                  <Checkbox
                    onCheck={() => selectSingleUser(user.id)}
                    onUncheck={() => unSelectSingleUser(user.id)}
                    checked={user.checked}
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <ConsultantLabel name={user.fullName} picture={user.picture} />
                </Table.Cell>

                <Table.Cell width="20%">{user.email}</Table.Cell>

                <Table.Cell width="20%" center>
                  <IconsContainer>
                    <Icons.CalendarEdit
                      size={24}
                      color={!user.permissions.createAndEditEvents ? '#d8d8d8' : primary}
                    />
                    <Icons.CalendarDelete
                      size={24}
                      color={!user.permissions.deleteEvents ? '#d8d8d8' : primary}
                    />
                    <Icons.Billing
                      size={24}
                      color={!user.permissions.viewBilling ? '#d8d8d8' : primary}
                    />
                    <Icons.ManageStaff
                      size={24}
                      color={!user.permissions.manageStaffPermissions ? '#d8d8d8' : primary}
                    />
                  </IconsContainer>
                </Table.Cell>

                <Table.Cell width="20%" center selected>
                  {moment(user.createdAt).format('MM/DD/YYYY')}
                </Table.Cell>

                <Table.Cell width="15%">
                  <div className="actions">
                    <Icons.Delete size={24} color="#7d7d7d" />
                    <Icons.Delete size={24} color="#7d7d7d" />
                  </div>
                </Table.Cell>
              </StyledTableRow>
            ))}
          </Table.Body>
        </Table>
      </TableContainer>
    </>
  );
};

StaffTable.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

StaffTable.defaultProps = {
  users: []
};

export { StaffTable };
