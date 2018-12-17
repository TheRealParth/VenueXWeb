import React from 'react';
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

const StaffTable = props => {
  const { users, classes } = props;
  const { root, table, tableCell, ...rest } = classes;
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
              <TableCell className={tableCell}>Name</TableCell>
              <TableCell className={tableCell} numeric>Email</TableCell>
              <TableCell className={tableCell} numeric>Permission</TableCell>
              <TableCell className={tableCell} numeric>Date Added</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => {
              const formattedDate = moment(user.created).format('MM/DD/YYYY');

              return (
                <TableRow key={user.id}>
                  <TableCell component="th" scope="row">
                    <UserAvatar classes={rest} user={user} />
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
