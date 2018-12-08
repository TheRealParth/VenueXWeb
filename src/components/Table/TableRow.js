import React from 'react';
import styled from 'styled-components';

const TableRow = styled.div`
  height: 75px; /* not sure what to set this as */
  background-color: #ffffff;
  border-bottom: solid 1px #eeeeee;
  padding-left: 25px;
  display: flex;
  justify-content: left;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #fafafa;
  }
`;

export default ({ label, ...restProps }) => <TableRow {...restProps} />;
