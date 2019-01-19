import React from 'react';

export default ({ label, onClick, disabled, ...restProps }) => (
  <Button {...restProps} onClick={disabled ? null : onClick}>
    {label}
  </Button>
);
