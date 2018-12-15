import { withStyles } from '@material-ui/core/styles';
import { ManageStaff } from './ManageStaff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};
function mapStateToProps({ events, users }) {
  return {
    events,
    users
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

const connectedManageStaff = connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStaff);

export default withStyles(styles)(connectedManageStaff);
