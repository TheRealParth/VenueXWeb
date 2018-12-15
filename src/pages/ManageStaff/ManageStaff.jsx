import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class ManageStaff extends Component {
  componentDidMount() {
    this.props.getUsersRequest();
  }

  render() {
    const { users, classes } = this.props;
    const { root, table } = classes;
    console.log(users, classes);
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
  }
}

ManageStaff.propTypes = {
  classes: PropTypes.object.isRequired
};

ManageStaff.defaultProps = {
  users: []
};

export { ManageStaff };
