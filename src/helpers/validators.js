const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegex = /^\d+$/;
///these might be unused...
// export const phoneRegex = /^(\+?\d{1,2}?\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
// export const monthRegex = /^[0-9]{1,2}$/;
// export const yearRegex = /^[0-9]{2,4}$/;

export const loginValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export const forgotPasswordValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export const registerValidator = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 6) {
    errors.username = 'Username must be a minimum of 6 characters';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }
  return errors;
};
