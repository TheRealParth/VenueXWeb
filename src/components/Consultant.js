import React from 'react';
import styled from 'styled-components';


const Name = styled.div`

  color: #222222;
  font-weight: 500;
`;

const Picture = styled.img`
  width: 50px;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default props => (
  <Container>
    <Picture src={props.picture} />
    <Name>{props.name}</Name>
  </Container>
);
