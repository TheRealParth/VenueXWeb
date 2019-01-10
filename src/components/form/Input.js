import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';

const Input = styled.input`
  border: none;
  border-bottom: solid 1px #d8d8d8;
  display: block;
  width: 100%;
  transition-duration: 0.3s;
  margin-right: 20px;

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
