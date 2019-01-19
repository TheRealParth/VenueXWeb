import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';
import Select from 'react-select';

const Container = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 4px);
    width: 13px;
    height: 8px;
    background-image: url(../../assets/caret-down-custom.svg);
    background-size: cover;
  }
`;

export default props => (
  <BaseInput {...props}>
    <Select {...props.input} {...props} isMulti closeMenuOnSelect={false}>
      <option value="">Select one</option>
      {props.options.map(o => (
        <option value={o.value}>{o.label}</option>
      ))}
    </Select>
  </BaseInput>
);
