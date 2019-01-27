import { Loader } from './Loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sortEventsSelector } from '../../reducers/events';
import { get } from 'lodash';

//TODO
function mapStateToProps({ config, auth }) {
  return {
    config,
    auth
  };
}


export default connect(
  mapStateToProps
)(Loader);
