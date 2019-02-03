import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { get } from 'lodash';

const UserAvatar = ({ user, classes }) => {
  return (
    <div className={classes.userInfo}>
      {user.picture ? (
        <Avatar src={user.picture} />
      ) : (
          <Avatar>
            <PersonIcon />
          </Avatar>
        )}
      <span className={classes.fullName}>
        {get(user, 'fullName', 'Full Name')}
      </span>
    </div>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default UserAvatar;
