import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import get from 'lodash';

const styles = {
  avatar: {
    margin: 10
  }
};

const UserAvatar = (user, props) => (
  <Grid>
    {user.picture ? (
      <Avatar src={user.picture} className={props.classes.avatar} />
    ) : (
      <Avatar className={props.classes.avatar}>
        <PersonIcon />
      </Avatar>
    )}
    {get(user, 'fullName', 'Full Name')}
  </Grid>
);

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserAvatar);
