import { EditStaffPermissionsDropdown } from './EditStaffPermissionsDropdown';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditStaffPermissionsDropdown);
