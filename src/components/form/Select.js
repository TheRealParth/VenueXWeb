import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from 'components/form/BaseInput';
import dropdownCaretDown from 'assets/caret-down-custom.svg';

const Select = styled.select`
  border: none;
  -webkit-appearance: none;
  background-color: #FFF;
  border-bottom: solid 1px #d8d8d8;
  border-radius: 0px;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }

  ${props => props.meta && props.meta.error && props.meta.touched && css`
    border-bottom: solid 1px #c02026;
  `}
`;

const Container = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 4px);
    width: 13px;
    height:   8px;
    background-image: url(${dropdownCaretDown});
    background-size: cover;
  }
`;

export default props => (
  <BaseInput {...props}>
    <Container>
      <Select {...props.input} {...props}>
        <option value="">Select one</option>
        {props.options.map(o => (
          <option value={o.value}>{o.label}</option>
        ))}
      </Select>
    </Container>
  </BaseInput>
);
