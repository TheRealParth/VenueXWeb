import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import UserAvatar from './UserAvatar';
import PermissionsIcons from '../PermissionsIcons';
import ManageStaffHeader from './ManageStaffHeader.jsx';
import AddEmployeeModal from './AddEmployeeModal';

const StaffTable = props => {
  const { users, classes } = props;
  const { root, table } = classes;
  return (
    <>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ManageStaffHeader {...props} className={classes.paper} />
        </Grid>
      </Grid>
      <Paper className={root}>
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
