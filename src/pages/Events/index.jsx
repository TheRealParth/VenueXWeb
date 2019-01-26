import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Events } from './Events';
import * as actions from '../../actions';

function mapStateToProps({ events, config, users, auth }) {
  return {
    events: events.list,
    config,
    currentUser: auth.user ? users.list.find((user) => {
      console.log(user)
      return (user.id === auth.user.uid);
    }) : {},
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
