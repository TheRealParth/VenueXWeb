import React from 'react';
import styled, { css } from 'styled-components';
import ColIcon from './ColIcon';

const ColTitle = styled.div`
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-stretch: normal;
  text-transform: uppercase;
  line-height: normal;
  letter-spacing: 0.3px;
  color: #888888;
  display: flex;
  align-content: center;
  cursor: default;
  /* Disables text highlighting */
  webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Chrome and Opera */
  ${props =>
    props.selected === true &&
    css`
      font-weight: bold;
      color: #181818;
    `};
`;

export default ({ title, ...restProps }) => (
  <ColTitle {...restProps}>
    <div>{title}</div>
    <ColIcon {...restProps} />
  </ColTitle>
);
