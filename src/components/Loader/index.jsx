import { Loader } from './Loader';
import { connect } from 'react-redux';

function mapStateToProps({ config, auth }) {
  return {
    config,
    auth
  };
}

export default connect(mapStateToProps)(Loader);
