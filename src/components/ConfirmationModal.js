import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Button from 'components/Button';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Text = styled.div`
  font-size: 24px;
  color: #181818;
  max-width: 60%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default ({
  label,
  isOpen,
  onConfirm,
  onCancel,
}) => (
  <Modal top="45%" bottom="initial" isOpen={isOpen}>
    <Container>
      <Text>{label}</Text>
      <div>
        <Button
          label="Cancel"
          onClick={onCancel}
        />
        &nbsp;
        <Button
          kind="danger"
          label="Yes, Delete"
          onClick={onConfirm}
        />
      </div>
    </Container>
  </Modal>
);
