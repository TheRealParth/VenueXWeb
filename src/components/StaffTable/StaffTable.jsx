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
  theme,
  editModal,
  singleDeleteModal,
  deleteModal
}) => {
  return (
    <>
      <div className={StaffTableContainer}>
        <Table>
          <Table.Row header height="75px" style={{ paddingTop: '10px' }}>
            <Table.Cell width="5%">
              <Table.HeaderCell
                noSort
                theme={theme}
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
                    theme={theme}
                    onClick={() =>
                      setUsersSortKey('fullName', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    rotate={sort.orderBy === 'desc' && sort.sortKey === 'fullName' ? 'asc' : 'desc'}
                    title={'Name'}
                    selected
                  //style={{ paddingLeft: '49px' }} /* fixes padding issue, though incorrectly.. */
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    theme={theme}
                    onClick={() =>
                      setUsersSortKey('email', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    rotate={sort.orderBy === 'desc' && sort.sortKey === 'email' ? 'asc' : 'desc'}
                    numeric
                    title="Email"
                    center
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    theme={theme}
                    onClick={() => { }}
                    title="Permission"
                    center
                    noSort
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    theme={theme}
                    onClick={() =>
                      setUsersSortKey('created', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    rotate={sort.orderBy === 'desc' && sort.sortKey === 'created' ? 'asc' : 'desc'}
                    title="Date Added"
                    center
                  />
                </Table.Cell>
                <Table.Cell width="15%" />
              </>
            ) : (
                <>
                  <Table.Cell width="38%">
                    <EditStaffPermissionsDropdown
                      selectedCount={selectedCount}
                      selectedEmployees={users.filter(user => user.checked)}
                    />
                  </Table.Cell>
                  <Table.Cell width="40%">
                    <Button
                      label={`Delete ${selectedCount} staff member${selectedCount > 1 ? 's' : ''}`}
                      kind="danger"
                      onClick={() => deleteModal()}
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
                      color={!user.permissions.createAndEditEvents ? '#d8d8d8' : theme.colors.primary}
                    />
                    <Icons.CalendarDelete
                      size={24}
                      color={!user.permissions.deleteEvents ? '#d8d8d8' : theme.colors.primary}
                    />
                    <Icons.Billing
                      size={24}
                      color={!user.permissions.viewBilling ? '#d8d8d8' : theme.colors.primary}
                    />
                    <Icons.ManageStaff
                      size={24}
                      color={!user.permissions.manageStaffPermissions ? '#d8d8d8' : theme.colors.primary}
                    />
                  </div>
                </Table.Cell>

                <Table.Cell width="20%" center selected>
                  {moment(user.createdAt).format('MM/DD/YYYY')}
                </Table.Cell>

                <Table.Cell width="15%">
                  <div className="actions">
                    <Icons.Edit onClick={() => { editModal(user.id) }} size={24} color="#7d7d7d" />
                    <a onClick={() => { singleDeleteModal(user.id) }}><Icons.Delete size={24} color="#7d7d7d" /></a>
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
