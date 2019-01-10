import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  font-weight: 500;
  align-items: center;
  padding: 15px 0px;
  margin-right: 15px;
  align-self: center;
  width: fill-available;

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.div`
  color: #c02026;
  font-size: 11px;
`;

const Label = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #7d7d7d;
  padding-right: 10px;
  white-space: noWrap;
`;

export default ({ label, children, alignItems, ...props }) => (
  <Container alignItems={alignItems}>
    <Label>{label}</Label>
    <Right>
      {props.meta && props.meta.touched && props.meta.error && (
        <ErrorText>{props.meta.error}</ErrorText>
      )}
      {children}
    </Right>
  </Container>
);
