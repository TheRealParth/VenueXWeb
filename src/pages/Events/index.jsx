import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Events } from './Events';
import * as actions from '../../actions';

function mapStateToProps({ events }) {
  return {
    events: events.list
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
