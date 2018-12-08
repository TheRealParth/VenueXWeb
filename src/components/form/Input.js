import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from 'components/form/BaseInput';

const Input = styled.input`
  border: none;
  border-bottom: solid 1px #d8d8d8;
  display: block;
  width: 100%;
  padding: 5px;
  transition-duration: 0.3s;

  &:focus {
    outline: none;
    border-bottom: solid 1px ${props => props.theme.colors.primary};
  }

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}

`;

export default props => (
  <BaseInput {...props}>
    <Input type="text" {...props.input} {...props} />
  </BaseInput>
);
