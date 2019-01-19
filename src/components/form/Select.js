import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';
import dropdownCaretDown from '../../assets/caret-down-custom.svg';
import Select from 'react-select';
import { SelectStyle } from './index.module.scss';
import './index.module.scss';

const customStyles = {
  control: provided => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #7d7d7d66',
    borderRadius: '0'
  })
};

const Container = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 4px);
    width: 13px;
    height: 8px;
    background-image: url(${dropdownCaretDown});
    background-size: cover;
  }
`;

export default props => (
  <BaseInput {...props}>
    <Container>
      <Select {...props.input} {...props} styles={customStyles}>
        <option value="">Select one</option>
        {props.options.map(o => (
          <option value={o.value}>{o.label}</option>
        ))}
      </Select>
    </Container>
  </BaseInput>
);
