import React from 'react';
import Button from '../Button';
import {
  BillingSummaryContainer,
  BillingSummaryItem,
  label,
  value
} from './index.module.scss';

const BillingSummary = () => (
  <>
    <div className={BillingSummaryContainer}>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Events</div>
        <div className={value}>20</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Total Guests</div>
        <div className={value}>4000</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Current Balance</div>
        <div className={value}>$250</div>
      </div>
      <div className={BillingSummaryItem}>
        <div className={label}>Due date:&nbsp;</div>
        <div className={value}>Jan 8</div>
      </div>
      <div>
        <Button kind="success" label="Download Invoice" />
      </div>
    </div>
  </>
);

export default BillingSummary;
