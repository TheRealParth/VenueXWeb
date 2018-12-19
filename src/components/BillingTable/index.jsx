import { withStyles } from '@material-ui/core/styles';
import { BillingTable } from './BillingTable';

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    overflowX: 'auto',
    marginTop: 20
  },
  table: {
    minWidth: 700
  },
  tableCell: {
    textAlign: 'center'
  },
  userInfo: {
    display: 'flex'
  },
  fullName: {
    margin: 'auto',
    marginLeft: 10,
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: -0.3
  },
  container: {
    height: 30 /* not sure what to set this as */,
    backgroundColor: '#fcfbfc',
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    float: 'right',
    height: '50px',
    width: '50px',
    marginLeft: '10px',
    backgroundColor: '#c0b69b'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

export default withStyles(styles)(BillingTable);
