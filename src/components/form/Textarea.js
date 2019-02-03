import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';

const Textarea = styled.textarea`
  border: none;
  border-radius: 2px;
  resize: none;
  width: 100%;
  margin-bottom: -9px;
  background: none;
  &:focus {
    outline: 0;
    border: none;
    background-color: #c0b59d26;
    padding: 8px;

     {
      /* TO-DO make background color expand to whole box, fix spacing */
    }
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
