import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import { get } from 'lodash';

const styles = {
  container: {
    direction: 'row',
    alignItems: 'center'
  },
  avatar: {
    margin: 10
  }
};

const UserAvatar = ({ user, classes }) => {
  return (
    <Grid styles={classes.container}>
      {user.picture ? (
        <Avatar src={user.picture} className={classes.avatar} />
      ) : (
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
      )}
      {get(user, 'fullName', 'Full Name')}
    </Grid>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserAvatar);
