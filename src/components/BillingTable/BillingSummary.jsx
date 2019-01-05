import React from 'react';
import styled, { css } from 'styled-components';
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

const BillingSummaryItem = styled.div`
  color: #181818;
  font-size: 15px;
  padding-left: 30px;
  margin-left: 30px;
  border-left: solid 1px #b0b0b0;
  font-family: Lora;
  font-weight: 500;

  &:first-child {
    border-left: none;
    margin-left: 0px;
    padding-left: 0px;
  }

  .label {
    color: #b0b0b0;
    font-weight: 500;
  }

  .value {
    font-size: 40px;
  }
`;

const BillingSummary = styled.div`
  background-color: #fff;
  margin: 15px 0px;
  border: solid 1px #fafafa;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const styles = theme => ({
  fab: {
    size: 25,
    backgroundColor: '#c0b69b',
    margin: theme.spacing.unit
  },
  extendedIcon: theme.spacing.unit
});

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
    <BillingSummary>
      <BillingSummaryItem>
        <div className="label">Total Events</div>
        <div className="value">20</div>
      </BillingSummaryItem>
      <BillingSummaryItem>
        <div className="label">Total Guests</div>
        <div className="value">4000</div>
      </BillingSummaryItem>
      <BillingSummaryItem>
        <div className="label">Current Balance</div>
        <div className="value">$250</div>
      </BillingSummaryItem>
      <BillingSummaryItem>
        <div className="label">Due date:&nbsp;</div>
        <div className="value">Jan 8</div>
      </BillingSummaryItem>
      <div>
        <Button kind="success" label="Make A Payment" />
      </div>
    </BillingSummary>
  </>
);

BillingSummary.propTypes = {
  classes: PropTypes.object.isRequired
};
