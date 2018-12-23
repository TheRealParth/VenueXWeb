import React from 'react';
import styled from 'styled-components';
import plusIcon from '../assets/plus.svg';

const AddIcon = styled.img`
  height: 17px;
  width: 17px;
`;
//   background-color: ${props => props.theme.colors.primary};
const AddButton = styled.div`
  height: 50px;
  background-color: #c0b69b;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(125, 125, 125, 0.2);
  cursor: pointer;
`;

export default props => (
  <AddButton {...props}>
    <AddIcon src={plusIcon} />
  </AddButton>
);
