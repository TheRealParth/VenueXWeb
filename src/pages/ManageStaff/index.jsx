import { ManageStaff } from './ManageStaff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { sortUsersSelector } from '../../reducers/users';
import { get } from 'lodash';

function mapStateToProps({ events, config, users, auth }) {
  const newConf = get(config, 'config', {});
  return {
    config: newConf,
    events: events.list,
    users: users.list,
    currentUser: auth.user
      ? users.list.find(user => {
          console.log(user);
          return user.id === auth.user.uid;
        })
      : {},
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
)(ManageStaff);
