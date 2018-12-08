import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.div`
  height: 50px;
  padding: 0px 30px;
  box-shadow: 0 2px 4px 0 rgba(125, 125, 125, 0.2);
  border: solid 1px #ededed;
  font-size: 12px;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #7d7d7d;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;

  ${props => props.kind === 'primary' && css`
    background-color: ${props.theme.colors.primary};
    color: #FFF;
    border: solid 1px ${props.theme.colors.primary};
  `}

  ${props => props.kind === 'success' && css`
    background-color: #2cb070;
    color: #FFF;
  `}

  ${props => props.size === 'small' && css`
    padding: 0px 15px;
    height: 40px;
  `}

  ${props => props.kind === 'danger' && css`
    color: #c02026;
  `}

  ${props => props.kind === 'white' && css`
    background-color: #ffffff;
    color: #fff;
    border: solid 1px #ededed;
  `}
`;

export default ({
  label,
  onClick,
  disabled,
  ...restProps
}) => (
  <Button
    {...restProps}
    onClick={disabled ? null : onClick}
  >
    {label}
  </Button>
);
