import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Dropdown from './Dropdown';
import LogOut from '../assets/icons/LogOut';
import Camera from '../assets/icons/Camera';
import Key from '../assets/icons/Key';

const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .10);
  margin: 0px 5px;
  cursor: pointer;
`;

const NameSection = styled.div`
  padding: 10px 0px;
  border-bottom: solid 1px #d8d8d8;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  font-size: 11px;
  font-weight: 800;
  color: #b0b0b0;
  align-items: center;
  text-transform: uppercase;
  padding: 10px 5px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;

const PersonalMenu = ({ currentUser }) => (
  <div>
    <Dropdown
      toggle={
        <ProfilePicture
          src="https://placehold.it/100x100"
        />
      }
    >
      <div>
        <NameSection>
          Hi, {currentUser.displayName}
        </NameSection>

        <Item>
          <Camera color="#b0b0b0" />
          <div>Edit profile Image</div>
        </Item>

        <Item>
          <Key color="#b0b0b0" />
          <div>Change password</div>
        </Item>

        <Item>
          <LogOut color="#b0b0b0" />
          <div>Log Out</div>
        </Item>
      </div>
    </Dropdown>
  </div>
);

export default connect(state => ({
  currentUser: () => { },
}))(PersonalMenu);
