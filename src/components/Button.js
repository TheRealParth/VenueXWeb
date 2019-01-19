import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonStyles, Button, SuccessButton, PrimaryButton } from './index.module.scss';

function buttonType(props) {
  if (props) {
    if (props.kind === 'primary') {
      return PrimaryButton;
    }
    if (props.kind === 'success') {
      return SuccessButton;
    } else return Button;
  } else return Button;
}

buttonType();
/* const Button = styled.div` 
  ${props =>
    props.kind === 'primary' &&
    css`
      background-color: #c0b59d;
      color: #fff;
      border: solid 1px rgba 188 172 150, 0.4;
    `}

  ${props =>
    props.kind === 'success' &&
    css`
      background-color: #2cb070;
      color: #fff;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      padding: 0px 15px;
      height: 40px;
    `}

  ${props =>
    props.kind === 'danger' &&
    css`
      color: #c02026;
    `}

  ${props =>
    props.kind === 'white' &&
    css`
      background-color: #ffffff;
      color: #fff;
      border: solid 1px #ededed;
    `} 

`; */

export default ({ label, onClick, disabled, ...restProps }) => (
  <div {...restProps} onClick={disabled ? null : onClick} className={buttonType(restProps)}>
    {label}
  </div>
);
