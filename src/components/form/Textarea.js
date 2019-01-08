import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';

const Textarea = styled.textarea`
  border: solid 1px #d8d8d8;
  border-radius: 2px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 0;
    border: solid 1px #c0b59d;
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
  <BaseInput {...props} alignItems="flex-start">
    <Textarea {...props.input} rows={6} />
  </BaseInput>
);
