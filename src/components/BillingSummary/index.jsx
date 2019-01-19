import React from 'react';
import Button from '../Button';
import {
  BillingSummaryContainer,
  BillingSummaryItem,
  InvoiceButton,
  label,
  value
} from './index.module.scss';
import moment from 'moment';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const BillingSummary = props => (
  <>
    <div className={BillingSummaryContainer}>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Events</div>
        <div className={value}>{props.totalEvents}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Guests</div>
        <div className={value}>{numberWithCommas(props.totalGuests)}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Current Balance</div>
        <div className={value}>$ {numberWithCommas(props.balance)}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Due date:{props.daysUntilDue}</div>
        <div className={value} style={{ minWidth: '213px' }}>
          {props.dueDate.format('MMM d, YYYY')}
        </div>
      </div>
      <div className={InvoiceButton}>
        <Button kind={props.invoiceAvailable ? 'success' : 'disabled'} label="Download Invoice" />
      </div>
    </div>
  </>
);

export default BillingSummary;
