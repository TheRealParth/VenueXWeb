import React from 'react';
import styled, { css } from 'styled-components';
import plusIcon from '../../assets/plus.svg';
import filterIcon from '../../assets/filter.svg';
import Icons from '../../assets/icons';
import Button from '../Button';
import RoundButton from '../../components/RoundButton';

const ManageStaffHeader = styled.div`
  height: 40px; /* not sure what to set this as */
  background-color: #fcfbfc;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center
    ${props =>
    props.kind === 'primary' &&
    css`
        color: red;
      `};
`;

const FilterLabel = styled.div` 
font-family: Montserrat;
font-size: 12px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #7d7d7d;
display: flex;
align-items: center;
justify-content: space-around
}`;

const AddIcon = styled.img`
  height: 17px;
  width: 17px;
`;

const ActionButtonGroup = styled.div`
  display: flex;
  width: 111px;
  justify-content: space-between;
`;

export default ({ label, ...restProps }) => (
  <ManageStaffHeader {...restProps}>
    <Button
      label={
        <FilterLabel>
          <AddIcon src={filterIcon} />
          Filter
        </FilterLabel>
      }
      kind="white"
    />
    <div>
      <Icons.Rings size="75" />
      <Icons.Plus size="40" color="#fff" />
    </div>

    <Icons.Delete />
    <Icons.Bell />
    <ActionButtonGroup>
      <RoundButton>
        <AddIcon src={plusIcon} />
      </RoundButton>
      <RoundButton label="U" />
    </ActionButtonGroup>
  </ManageStaffHeader>
);
