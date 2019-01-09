import { connect } from 'react-redux';
import { get } from 'lodash';
import { InjectStyles } from './InjectStyles';

function mapStateToProps({ config }) {
  const theme = get(config, 'config.theme', {});
  return {
    ...theme
  };
}

export default connect(mapStateToProps)(InjectStyles);
