import React from 'react';
import plusIcon from '../../assets/plus.svg';
import { AddButton, AddIcon } from './index.module.scss';

export default props => (
  <div className={AddButton} {...props}>
    <img className={AddIcon} src={plusIcon} />
  </div>
);
