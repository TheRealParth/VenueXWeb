import React from 'react';
import styled, { css } from 'styled-components';
import BaseInput from '../form/BaseInput';
import dropdownCaretDown from '../../assets/caret-down-custom.svg';
import Select from 'react-select';
import { SelectStyle } from './index.module.scss';
import './index.module.scss';

const customStyles = props => {
  return {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      borderBottom: state.isFocused ? '3px solid #d8d8d8' : '2px solid #d8d8d8',
      borderRadius: '0',
      margin: '0px 10px',
      boxShadow: 'none',
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        borderBottom: '3px solid #d8d8d8'
      }
    }),
    placeholder: provided => ({
      ...provided,
      padding: '0px',
      marginLeft: '-9px',
      fontSize: '15px',
      fontWeight: '600',
      letterSpacing: '-0.3px',
      color: '#7d7d7d',
      top: '16.4px'
    }),
    singleValue: provided => ({
      ...provided,
      padding: '0px',
      marginLeft: '-9px',
      fontSize: '15px',
      fontWeight: '600',
      letterSpacing: '-0.3px',
      color: '#222222',
      top: '16.4px'
    }),
    dropdownIndicator: provided => ({
      ...provided,
      border: 'none'
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none'
    }),
    menuList: provided => ({
      ...provided,
      borderRadius: '0px',
      color: '#222222',
      fontSize: '15px'
    }),
    menu: provided => ({
      ...provided,
      borderRadius: '0px',
      width: '94.9%',
      left: '11px',
      marginTop: '0px',
      backgroundColor: props.primaryColor
    }),

    dropdownIndicator: provided => ({
      ...provided,
      padding: '0px'
    })
  };
};

export default props => (
  <BaseInput {...props}>
    <Select {...props.input} {...props} styles={customStyles} defaultMenuIsOpen>
      {props.options.map(o => (
        <option value={o.value}>{o.label}</option>
      ))}
    </Select>
  </BaseInput>
);
function newFunction(props) {
  return props.primaryColor;
}
