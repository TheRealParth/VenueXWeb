import React from 'react';
import Switch from 'components/Switch';

import BaseInput from './BaseInput';


export default props => (
  <BaseInput {...props}>
    <Switch
      onChange={() => props.input.onChange(!props.input.value)}
      isActive={props.input.value}
    />
  </BaseInput>
);
