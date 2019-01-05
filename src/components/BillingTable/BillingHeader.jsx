import React from 'react';
import styled, { css } from 'styled-components';
import filterIcon from '../../assets/filter.svg';
import Icons from '../../assets/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Button from '../Button';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const FilterLabel = styled.div` 
font-family: Montserrat;
font-size: 12px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #7d7d7d;
display: flex;
align-items: center;
justify-content: space-around
}`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

const styles = theme => ({
  fab: {
    size: 25,
    backgroundColor: '#c0b69b',
    margin: theme.spacing.unit
  },
  extendedIcon: theme.spacing.unit
});

const BillingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0px 18px;
`;

const ContactInfo = styled.div`
  width: 308px;
  height: 15px;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7d7d7d;
`;
export default ({ label, classes, openModal, closeModal, ...rest }) => (
  <>
    <BillingHeader>
      <ContactInfo>VenueX: 201-448-9419 | billing@teamvenuex.com</ContactInfo>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
    </BillingHeader>
  </>
);

BillingHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
