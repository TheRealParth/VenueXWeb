import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { EventModalForm } from './EventModalForm';

const FormConnectEventModalForm = reduxForm({
  form: 'EventForm'
})(EventModalForm);
const selector = formValueSelector('EventForm');
export default connect(state => {
  // can select values individually
  const formValues = selector(state, 'eventTeam', 'consultant');
  // const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  // const {firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    ...formValues
  };
})(FormConnectEventModalForm);
