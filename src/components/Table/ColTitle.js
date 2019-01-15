import React from 'react';
import styled, { css } from 'styled-components';
import ColIcon from './ColIcon';

const ColTitle = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-stretch: normal;
  font-weight: ${props => (props.selected ? '700' : '600')};
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.28px;
  color: ${props => (props.selected ? '#181818' : '#888888')};
  display: flex;
  align-content: center;
  justify-content: ${props => (props.center ? 'center' : '')};
  width: 100%;

  #sortButton {
    display: ${props => (props.noSort ? 'none' : '')};
  }
`;

export default ({ title, ...restProps }) => (
  <ColTitle {...restProps}>
    <div>{title}</div>
    <ColIcon {...restProps} id="sortButton" color="#c0b59d" />
  </ColTitle>
);
