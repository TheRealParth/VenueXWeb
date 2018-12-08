import React from 'react';
import styled, { css } from 'styled-components';

const RoundButton = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
  cursor: pointer;

  ${props =>
    props.kind === 'primary' &&
    css`
      background-color: ${props.theme.colors.primary};
      color: #fff;
      border: solid 1px ${props.theme.colors.primary};
    `};
`;

export default ({ label, ...restProps }) => <RoundButton {...restProps} />;
