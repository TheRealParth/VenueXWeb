import React from 'react';
import DatePicker from '../DatePicker';
import BaseInput from '../form/BaseInput';


export default props => (
  <BaseInput {...props}>
    <DatePicker
      {...props}
      selected={props.input.value}
      onChange={props.input.onChange}
      placeholder="Date"
    />
  </BaseInput>
);
