import React from 'react';
import moment from 'moment';
import Table from '../Table';
import styled from 'styled-components';

const TableContainer = styled.div`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: #222222;
  margin: 30px 17px 28px 13px;
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

const BillingTable = ({ events, theme, sort, setEventsSortKey }) => (
  <TableContainer>
    <Table>
      <Table.Row style={{ height: '63px' }} header>
        <Table.Cell width="19%">
          <Table.HeaderCell
            theme={theme}
            onClick={() => setEventsSortKey('client', sort.orderBy === 'asc' ? 'desc' : 'asc')}
            title="Client"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'client' ? 'asc' : 'desc'}
            center
          />
        </Table.Cell>
        <Table.Cell width="19%">
          <Table.HeaderCell
            theme={theme}
            onClick={() => setEventsSortKey('title', sort.orderBy === 'asc' ? 'desc' : 'asc')}
            title="Event"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'title' ? 'asc' : 'desc'}
            center
          />
        </Table.Cell>
        <Table.Cell width="12%">
          <Table.HeaderCell
            theme={theme}
            onClick={() => setEventsSortKey('eventType', sort.orderBy === 'asc' ? 'desc' : 'asc')}
            title="Event Type"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'eventType' ? 'asc' : 'desc'}
          />
        </Table.Cell>
        <Table.Cell width="10%">
          <Table.HeaderCell
            theme={theme}
            onClick={() =>
              setEventsSortKey('guests', sort.orderBy === 'asc' ? 'desc' : 'asc', true)
            }
            title="Guests"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'guests' ? 'asc' : 'desc'}
            center
          />
        </Table.Cell>
        <Table.Cell width="20%">
          <Table.HeaderCell
            theme={theme}
            onClick={() => setEventsSortKey('start', sort.orderBy === 'asc' ? 'desc' : 'asc')}
            title="Event Date"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'start' ? 'asc' : 'desc'}
            selected
            center
          />
        </Table.Cell>
        <Table.Cell width="20%">
          <Table.HeaderCell
            theme={theme}
            onClick={() => setEventsSortKey('createdBy', sort.orderBy === 'asc' ? 'desc' : 'asc')}
            title="Created By"
            rotate={sort.orderBy === 'desc' && sort.sortKey === 'createdBy' ? 'asc' : 'desc'}
            center
          />
        </Table.Cell>
      </Table.Row>
      <Table.Body>
        {events.map(event => (
          <StyledTableRow key={event.id}>
            <Table.Cell width="19%" component="th" scope="row">
              {event.client}
            </Table.Cell>
            <Table.Cell width="19%" component="th" scope="row">
              {event.title}
            </Table.Cell>
            <Table.Cell width="12%" component="th" scope="row">
              {event.eventType}
            </Table.Cell>
            <Table.Cell width="10%" component="th" scope="row" center>
              {event.guests}
            </Table.Cell>
            <Table.Cell width="20%" component="th" scope="row" center selected>
              {moment(event.start).format('MM/DD/YYYY')}
            </Table.Cell>
            <Table.Cell width="20%" component="th" scope="row">
              {event.createdBy}
            </Table.Cell>
          </StyledTableRow>
        ))}
      </Table.Body>
    </Table>
  </TableContainer>
);

export { BillingTable };
