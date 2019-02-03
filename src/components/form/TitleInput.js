import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from './BaseInput';

const Input = styled.input`
  border: none;
  display: block;
  width: 100%;
  padding: 0px;
  transition-duration: 0.3s;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  color: #222222
  letter-spacing: 0.8px;
  margin-left: -1px;
  background: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props =>
      props.meta && props.meta.touched && props.meta.error ? '#c02026' : '#b0b0b0'}
    opacity: 1; /* Firefox */
  
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #b0b0b0;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #b0b0b0;
  }

  &:focus {
    outline: none;
    border-bottom: solid 1px #c0b59d;
  }

  ${props =>
    props.meta &&
    props.meta.error &&
    props.meta.touched &&
    css`
      border-bottom: solid 1px #c02026;
    `}
`;

export default props => (
  <BaseInput {...props}>
    <Input type="text" {...props.input} {...props} autoComplete="off" />
  </BaseInput>
);
