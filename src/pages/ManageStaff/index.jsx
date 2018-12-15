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

export default withStyles(styles)(ManageStaff);
