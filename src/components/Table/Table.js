import React from 'react';
import styled, { css } from 'styled-components';

const Table = styled.div`
  background-color: #ffffff;

  width: 100%
    ${props =>
      props.kind === 'primary' &&
      css`
        color: red;
      `};
`;

export default ({ label, ...restProps }) => <Table {...restProps} />;
