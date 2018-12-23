import React from 'react';
import PropTypes from 'prop-types';
// import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Checkbox from '../Checkbox.js';
import AddButton from '../AddButton.js';
import Table from '../Table';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import moment from 'moment';
import UserAvatar from './UserAvatar';
import PermissionsIcons from '../PermissionsIcons';
import ManageStaffHeader from './ManageStaffHeader.jsx';
import CaretDown from '../../assets/icons/CaretDown';
import Button from '../Button';
import EditStaffPermissionsDropdown from '../staff/EditStaffPermissionsDropdown';

import { rowHeaderTitle, rowValue, hide, reverse, caretContainer } from './styles.module.scss';
import classnames from 'classnames';
import Icons from '../../assets/icons';
import ConsultantLabel from '../Consultant';

const Container = styled.div`
  border: solid 1px #ededed;
  background-color: #fafafa;
  padding: 0px 15px;
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
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

const StaffTable = ({ users, classes: { paper, root, table, tableCell, ...classes }, ...rest }) => {
  console.log(rest);
  const {
    sort,
    setUsersSortKey,
    anyChecked,
    allChecked,
    selectAllUsers,
    unSelectAllUsers,
    selectSingleUser,
    unSelectSingleUser
  } = rest;
  return (
    <>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ManageStaffHeader {...rest} classes={classes} className={paper} />
        </Grid>
      </Grid>
      <TableContainer>
        <Table className={table}>
          <Table.Row>
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
                    className={tableCell}
                    title={'Name'}
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    onClick={() =>
                      setUsersSortKey('email', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    className={tableCell}
                    numeric
                    title="Email"
                  />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell onClick={() => {}} className={tableCell} title="Permissions" />
                </Table.Cell>
                <Table.Cell width="20%">
                  <Table.HeaderCell
                    onClick={() =>
                      setUsersSortKey('created', sort.orderBy === 'asc' ? 'desc' : 'asc')
                    }
                    className={tableCell}
                    title="Date Added"
                  />
                </Table.Cell>
              </>
            ) : (
              <>
                <Table.Cell width="80%">
                  <EditStaffPermissionsDropdown selectedEmployees={[]} />
                  &nbsp;
                  <Button label="Delete 2 staff members" kind="danger" />
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

                <Table.Cell width="20%">
                  <IconsContainer>
                    <Icons.CalendarEdit
                      size={24}
                      color={!user.permissions.createAndEditEvents ? '#d8d8d8' : undefined}
                    />
                    <Icons.CalendarDelete
                      size={24}
                      color={!user.permissions.deleteEvents ? '#d8d8d8' : undefined}
                    />
                    <Icons.Billing
                      size={24}
                      color={!user.permissions.viewBilling ? '#d8d8d8' : undefined}
                    />
                    <Icons.ManageStaff
                      size={24}
                      color={!user.permissions.manageStaffPermissions ? '#d8d8d8' : undefined}
                    />
                  </IconsContainer>
                </Table.Cell>

                <Table.Cell width="20%">{moment(user.createdAt).format('MM/DD/YYYY')}</Table.Cell>

                <Table.Cell width="15%">
                  <div className="actions">
                    <Icons.Delete size={24} color="#7d7d7d" />
                    <Icons.Delete size={24} color="#7d7d7d" />
                  </div>
                </Table.Cell>
              </StyledTableRow>
              // <Table.Row key={user.id}>
              //   <Table.Cell
              //     className={classnames([tableCell, rowValue])}
              //     component="th"
              //     scope="row"
              //   >
              //     <UserAvatar classes={rest} user={user} />
              //   </Table.Cell>
              //   <Table.Cell className={classnames([tableCell, rowValue])} numeric>
              //     {user.email}
              //   </Table.Cell>
              //   <Table.Cell className={classnames([tableCell, rowValue])} numeric>
              //     <PermissionsIcons {...user.permissions} />
              //   </Table.Cell>
              //   <Table.Cell className={classnames([tableCell, rowValue])} numeric>
              //     {`${moment(user.created).format('MM/DD/YYYY')}`}
              //   </Table.Cell>
              // </Table.Row>
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
