import { Sidebar } from './Sidebar';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { withRouter } from 'react-router';

function mapStateToProps({ config }) {
  return {
    config: get(config, 'config', { theme: {} })
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
