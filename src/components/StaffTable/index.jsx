import { withStyles } from '@material-ui/core/styles';
import { StaffTable } from './StaffTable';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
};

export default withStyles(styles)(StaffTable);
