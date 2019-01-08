import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const GenericInput = props => {
  const { input, label, type, meta } = props;
  const { error, touched, warning } = meta;
  return (
    <FormControl margin="normal" required fullWidth>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Input {...input} placeholder={label} type={type} />
      {/* {touched &&
        ((error && (
          <Fade in={true} timeOut={2000} tag="h6" className="mt-3">
            {error}
          </Fade>
        )) ||
          (warning && (
            <Fade in={true} timeOut={2000} tag="h5" className="mt-3">
              {warning}
            </Fade>
          )))} */}
    </FormControl>
  );
};
export default GenericInput;
