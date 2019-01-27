import React from 'react';
import styled from 'styled-components';

const Name = styled.div`
  color: #222222;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Picture = styled.img`
  width: 40px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 6px;
  margin-top: 7px;
`;

export default props => (
  <Container>
    <Picture src={props.picture} />
    <Name>{props.name}</Name>
  </Container>
);
