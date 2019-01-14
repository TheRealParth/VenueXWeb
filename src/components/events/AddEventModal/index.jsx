import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import { AddEventModal } from './AddEventModal';
import { sortUsersSelector } from '../../../reducers/users';
import * as actions from '../../../actions';

function mapStateToProps({ auth, config, events, users }) {
  const newConf = get(config, 'config', {});
  return {
    config: newConf,
    events: events.list,
    users: users.list,
    currentUser: auth.user ? users.list.find(user => user.id === auth.user.uid) : {},
    anyChecked: users.anyChecked,
    allChecked: users.allChecked,
    selectedCount: users.selectedCount,
    sort: {
      sortKey: users.sortKey,
      orderBy: users.orderBy
    },
    sortedUsers: sortUsersSelector(users)
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEventModal);
