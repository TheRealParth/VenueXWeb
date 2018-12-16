import { ManageStaff } from './ManageStaff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sortUsersSelector } from '../../reducers/users';

function mapStateToProps({ events, users }) {
  return {
    events: events.list,
    users: users.list,
    sortedUsers: sortUsersSelector(users)
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStaff);
