import React from 'react';
import moment from 'moment';
import Table from '../Table';
import styled from 'styled-components';
const TableContainer = styled.div`
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  color: #222222;
  margin-bottom: 20px;
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

const BillingTable = ({ events }) => (
  <TableContainer>
    <Table>
      <Table.Row>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Client" />
        </Table.Cell>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Event" />
        </Table.Cell>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Event Type" />
        </Table.Cell>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Guests" />
        </Table.Cell>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Event Date" />
        </Table.Cell>
        <Table.Cell width="16%">
          <Table.HeaderCell onClick={() => { }} title="Created By" />
        </Table.Cell>
      </Table.Row>
      <Table.Body>
        {events.map(event => (
          <StyledTableRow key={event.id}>
            <Table.Cell width="16%" component="th" scope="row">
              {event.client}
            </Table.Cell>
            <Table.Cell width="16%" component="th" scope="row">
              {event.title}
            </Table.Cell>
            <Table.Cell width="16%" component="th" scope="row">
              {event.eventType}
            </Table.Cell>
            <Table.Cell width="16%" component="th" scope="row">
              {event.guests}
            </Table.Cell>
            <Table.Cell width="16%" component="th" scope="row">
              {moment(event.start).format('MM/DD/YYYY')}
            </Table.Cell>
            <Table.Cell width="16%" component="th" scope="row">
              {event.createdBy}
            </Table.Cell>
          </StyledTableRow>
        ))}
      </Table.Body>
    </Table>
  </TableContainer>
);

export { BillingTable };
