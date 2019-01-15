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

const BillingTable = ({ events }) => (
  <TableContainer>
    <Table>
      <Table.Row style={{ height: '63px' }}>
        <Table.Cell width="19%">
          <Table.HeaderCell onClick={() => ''} title="Client" center />
        </Table.Cell>
        <Table.Cell width="19%">
          <Table.HeaderCell onClick={() => ''} title="Event" center />
        </Table.Cell>
        <Table.Cell width="12%">
          <Table.HeaderCell onClick={() => ''} title="Event Type" />
        </Table.Cell>
        <Table.Cell width="10%">
          <Table.HeaderCell onClick={() => ''} title="Guests" center />
        </Table.Cell>
        <Table.Cell width="20%">
          <Table.HeaderCell onClick={() => ''} title="Event Date" selected center />
        </Table.Cell>
        <Table.Cell width="20%">
          <Table.HeaderCell onClick={() => ''} title="Created By" center />
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
