import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import { get } from 'lodash';
import styled from 'styled-components';

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 110px;
`;

export default ({ user, classes }) => {
  return (
    <>
      {user.picture ? (
        <Avatar src={user.picture} />
      ) : (
        <Avatar>
          <PersonIcon />
        </Avatar>
      )}
      {get(user, 'fullName', 'Full Name')}
    </>
  );
};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};
