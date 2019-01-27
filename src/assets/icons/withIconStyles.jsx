import { connect } from 'react-redux';
import { get } from 'lodash';

function mapStateToProps({ config }) {
  const theme = get(config, 'config.theme', { colors: { primary: '', secondary: '' } });
  return {
    theme
  };
}

export default connect(mapStateToProps);
