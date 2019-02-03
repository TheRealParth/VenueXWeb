import { reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { AddEmployeeModal } from './AddEmployeeModal';

const selector = formValueSelector('AddEmployeeModal');

function mapStateToProps(state, ownProps) {
  const formValues = selector(state, 'fullName', 'email');
  return {
    ...ownProps,
    ...formValues,
    isLoading: state.users.creatingUser
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const FormConnected = reduxForm({
  form: 'AddEmployeeModal'
})(AddEmployeeModal);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormConnected);
