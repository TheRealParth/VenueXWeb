import React from 'react';
import styled, { css } from 'styled-components';
import checkmarkWhite from '../assets/checkmark-white.svg';

const Root = styled.div`
  border: solid 1px #b0b0b0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
    props.checked &&
    css`
      background-color: rgba(0, 0, 0, 0.4);
    `};
`;

const Checkmark = styled.img`
  width: 10px;
  height: 10px;
  display: none;

  ${props =>
    props.checked &&
    css`
      display: block;
    `};
`;

export default ({ checked, onCheck, onUncheck }) => (
  <Root checked={checked} onClick={() => (checked ? onUncheck() : onCheck())}>
    <Checkmark checked={checked} src={checkmarkWhite} />
  </Root>
);
