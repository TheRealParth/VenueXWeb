import { withStyles } from '@material-ui/core/styles';
import { StaffTable } from './StaffTable';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  container: {
    height: 30 /* not sure what to set this as */,
    backgroundColor: '#fcfbfc',
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(StaffTable);
