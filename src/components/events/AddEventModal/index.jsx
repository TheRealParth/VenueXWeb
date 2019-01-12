import { connect } from 'react-redux';
import { get } from 'lodash';
import { AddEventModal } from './AddEventModal';

function mapStateToProps({ config }) {
  const newConf = get(config, 'config', {});
  return {
    config: newConf
  };
}

export default connect(mapStateToProps)(AddEventModal);
