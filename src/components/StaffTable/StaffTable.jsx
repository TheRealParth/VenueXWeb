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
import CaretDown from '../../assets/icons/CaretDown';
import { rowHeaderTitle, hide, reverse, caretContainer } from './styles.module.scss';
import classnames from 'classnames';

const StaffTable = ({ users, classes: { paper, root, table, tableCell, ...classes }, ...rest }) => {
  console.log(rest);
  const { sort, setUsersSortKey } = rest;
  return (
    <>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <ManageStaffHeader {...rest} classes={classes} className={paper} />
        </Grid>
      </Grid>
      <Paper className={root}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => setUsersSortKey('fullName', sort.orderBy === 'asc' ? 'desc' : 'asc')} className={tableCell}>
                <p
                  className={classnames({
                    [rowHeaderTitle]: true
                  })}
                >
                  Name
                </p>
                <div
                  className={classnames({
                    [caretContainer]: true,
                    [reverse]: sort.sortKey === 'fullName' && sort.orderBy === 'asc',
                    [hide]: !(sort.sortKey === 'fullName')
                  })}
                >
                  <CaretDown size={14} />
                </div>
              </TableCell>
              <TableCell onClick={() => setUsersSortKey('email', sort.orderBy === 'asc' ? 'desc' : 'asc')} className={tableCell} numeric>
                <p
                  className={classnames({
                    [rowHeaderTitle]: true
                  })}
                >
                  Email
                </p>
                <div
                  className={classnames({
                    [caretContainer]: true,
                    [reverse]: sort.sortKey === 'email' && sort.orderBy === 'asc',
                    [hide]: !(sort.sortKey === 'email')
                  })}
                >
                  <CaretDown size={14} />
                </div>
              </TableCell>
              <TableCell onClick={() => { }} className={tableCell} numeric>
                <p
                  className={classnames({
                    [rowHeaderTitle]: true
                  })}
                >
                  Permissions
                </p>
                <div
                  className={classnames({
                    [caretContainer]: true,
                    [reverse]: sort.sortKey === 'permissions' && sort.orderBy === 'asc',
                    [hide]: !(sort.sortKey === 'permissions')
                  })}
                >
                  <CaretDown size={14} />
                </div>
              </TableCell>
              <TableCell onClick={() => setUsersSortKey('created', sort.orderBy === 'asc' ? 'desc' : 'asc')} className={tableCell} numeric>
                <p
                  className={classnames({
                    [rowHeaderTitle]: true
                  })}
                >
                  Date Added
                </p>
                <div
                  className={classnames({
                    [caretContainer]: true,
                    [reverse]: sort.sortKey === 'created' && sort.orderBy === 'asc',
                    [hide]: !(sort.sortKey === 'created')
                  })}
                >
                  <CaretDown size={14} />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell className={tableCell} component="th" scope="row">
                  <UserAvatar classes={rest} user={user} />
                </TableCell>
                <TableCell className={tableCell} numeric>
                  {user.email}
                </TableCell>
                <TableCell className={tableCell} numeric>
                  <PermissionsIcons {...user.permissions} />
                </TableCell>
                <TableCell className={tableCell} numeric>
                  {`${moment(user.created).format('MM/DD/YYYY')}`}
                </TableCell>
              </TableRow>
            ))}
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
