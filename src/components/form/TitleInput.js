import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from './BaseInput';

const Input = styled.input`
  border: none;
  display: block;
  width: 100%;
  padding: 5px;
  transition-duration: 0.3s;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: #c0b59d;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c0b59d;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c0b59d;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #c0b59d;
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
    <Input type="text" {...props.input} {...props} />
  </BaseInput>
);
