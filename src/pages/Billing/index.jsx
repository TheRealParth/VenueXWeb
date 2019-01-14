import { Billing } from './Billing';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sortUsersSelector } from '../../reducers/users';
import { get } from 'lodash';

function mapStateToProps({ events, users, config, auth }) {
  return {
    events: events.list,
    users: users.list,
    currentUser: users && users.list.find(user => user.id === auth.user.uid),
    sortedUsers: sortUsersSelector(users),
    config: get(config, 'config', {})
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Billing);
