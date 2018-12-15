import { withStyles } from '@material-ui/core/styles';
import { ManageStaff } from './ManageStaff';
const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};
import { ManageStaff } from './ManageStaff';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userActions } from '../actions';

function mapStateToProps({ users }) {
  return {
    users
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStaff);

export default withStyles(styles)(ManageStaff);
