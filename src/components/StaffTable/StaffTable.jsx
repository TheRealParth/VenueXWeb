import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import UserAvatar from './UserAvatar';
import PermissionsIcons from '../PermissionsIcons';
import ManageStaffHeader from './ManageStaffHeader';

const StaffTable = props => {
  console.log(props);
  const { users, classes } = props;
  const { root, table } = classes;
  console.log(classes);
  return (
    <Paper className={root}>
      <ManageStaffHeader className={classes} />
      <Table className={table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>Permission</TableCell>
            <TableCell numeric>Date Added</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => {
            console.log(user);
            const formattedDate = moment(user.created).format('MM/DD/YYYY');

            return (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                  <UserAvatar user={user} />
                </TableCell>
                <TableCell numeric>{user.email}</TableCell>
                <TableCell numeric>
                  <PermissionsIcons {...user.permissions} />
                </TableCell>
                <TableCell numeric>{formattedDate}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
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
