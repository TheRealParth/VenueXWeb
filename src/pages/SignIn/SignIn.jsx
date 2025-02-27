import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../../actions/auth';
import { loginValidator } from '../../helpers';
import GenericInput from '../../components/GenericInput';
import { isEmpty } from 'lodash';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { loginUserRequest, form } = this.props;
    loginUserRequest(form.logIn.values);
  }

  render() {

    const { classes } = this.props;
    const { auth, alert, form } = this.props;
    const { loggingIn } = auth;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {!isEmpty(alert.message) && (
              <Fade in={true} timeOut={4000} tag="h6" className="mt-3">
                {alert.message}
              </Fade>
            )}
            <form className={classes.form}>
              <Field
                component={GenericInput}
                type="text"
                className="form-control"
                name="email"
                label="Email"
                autoComplete="current-email"
                autoFocus
              />
              <Field
                component={GenericInput}
                className="form-control"
                type="password"
                name="password"
                label="Password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit}
              >
                Sign in
              </Button>

              <Link to="/register">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Register
                </Button>
              </Link>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignInScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const styledSignIn = withStyles(styles)(SignInScreen);

const mapStateToProps = ({ auth, alert, form }) => {
  const { user } = auth;
  return { auth, user, form, alert };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}

const connectedSignInPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(styledSignIn);

const reduxedSignInPage = reduxForm({
  form: 'logIn',
  validate: loginValidator
})(connectedSignInPage);

export { reduxedSignInPage as SignInPage };
//export default withStyles(styles)(SignIn);
