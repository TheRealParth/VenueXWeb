import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BillingHeader from './BillingHeader.jsx';
import BillingSummary from './BillingSummary.jsx';

const BillingTable = ({
  events,
  classes: { paper, root, table, tableCell, ...classes },
  ...rest
}) => (
  <>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <BillingHeader {...rest} classes={classes} />
      </Grid>
      <Grid item xs={12}>
        <BillingSummary {...rest} classes={classes} />
      </Grid>
    </Grid>
    <Paper className={root}>
      <Table className={table}>
        <TableHead>
          <TableRow>
            <TableCell className={tableCell}>Name</TableCell>
            <TableCell className={tableCell} numeric>
              Client
            </TableCell>
            <TableCell className={tableCell} numeric>
              Event
            </TableCell>
            <TableCell className={tableCell} numeric>
              Event Type
            </TableCell>
            <TableCell className={tableCell} numeric>
              Guests
            </TableCell>
            <TableCell className={tableCell} numeric>
              Event Date
            </TableCell>
            <TableCell className={tableCell} numeric>
              Created By
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.map(event => (
            <TableRow key={event.id}>
              <TableCell className={tableCell} component="th" scope="row">
                {event.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);

export { BillingTable };
