import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StaffTable = props => {
  console.log(props);
  const { users, classes } = props;
  const { root, table } = classes;
  return (
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
          {users.map(({ id, email, fullName, permissions, updated }) => {
            return (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {fullName}
                </TableCell>
                <TableCell numeric>{email}</TableCell>
                <TableCell numeric>Permissions</TableCell>
                <TableCell numeric>Updated</TableCell>
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
