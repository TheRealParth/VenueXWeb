import React from 'react';
import styled from 'styled-components';

const TableRow = styled.div`
  height: 70px;
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
    background-color: ${props => (props.header ? '' : '#fafafa')};
  }
`;

export default ({ label, ...restProps }) => <TableRow {...restProps} />;
