import React from 'react';
import { SuccessButton, BaseButton, PrimaryButton, DangerButton } from './index.module.scss';

const Button = ({ label, onClick, kind, disabled, ...restProps }) => {
  let ButtonType = BaseButton;
  if (kind === 'primary') ButtonType = PrimaryButton;
  if (kind === 'success') ButtonType = SuccessButton;
  if (kind === 'danger') ButtonType = DangerButton;
  return (
    <div {...restProps} onClick={disabled ? null : onClick} className={ButtonType}>
      {label}
    </div>
  );
};

export default Button;
