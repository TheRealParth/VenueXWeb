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
import { StaffTableContainer, IconsContainer } from './index.module.scss';

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
      <div className={StaffTableContainer}>
        <Table>
          <Table.Row header height="75px" style={{ paddingTop: '10px' }}>
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
                    selected
                    style={{ paddingLeft: '49px' }}
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
                  <Table.HeaderCell onClick={() => {}} title="Permission" center noSort />
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
                  <div className={IconsContainer}>
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
                  </div>
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
      </div>
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
