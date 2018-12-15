import { ManageStaff } from './ManageStaff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions';

function mapStateToProps({ events, users }) {
  return {
    events: events.list,
    users: users.list
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStaff);
