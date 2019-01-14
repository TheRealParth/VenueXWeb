import React from 'react';
import Button from '../Button';
import { BillingSummaryContainer, BillingSummaryItem, label, value } from './index.module.scss';

const BillingSummary = props => (
  <>
    <div className={BillingSummaryContainer}>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Events</div>
        <div className={value}>{props.totalEvents}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Guests</div>
        <div className={value}>{props.totalGuests}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Current Balance</div>
        <div className={value}>${props.balance}</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Due date:&nbsp;</div>
        <div className={value}>{props.dueDate.format('MMM d, YYYY')}</div>
      </div>
      <div>
        <Button kind="success" label="Download Invoice" />
      </div>
    </div>
  </>
);

export default BillingSummary;
