import React from 'react';
import {
  BillingHeaderContainer,
  ContactInfo,
  MonthNavigator,
  MonthNavigatorButton,
  MonthNavigatorLabel
} from './index.module.scss';
import CaretLeft from '../../assets/icons/CaretLeft';
import CaretRight from '../../assets/icons/CaretRight';
import PersonalMenu from '../PersonalMenu';

const BillingHeader = ({ handlePrevMonth, handleNextMonth, currentUser, label }) => (
  <>
    <div className={BillingHeaderContainer}>
      <div className={ContactInfo}>VenueX: 201-448-9419 | billing@teamvenuex.com</div>
      <div>
        <div className={MonthNavigator}>
          <CaretLeft
            size={16}
            onClick={handlePrevMonth}
            className={MonthNavigatorButton}
          />

          <div className={MonthNavigatorLabel}>{label}</div>

          <CaretRight
            size={16}
            onClick={handleNextMonth}
            className={MonthNavigatorButton}
          />
        </div>
      </div>

      <div>
        {' '}
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <PersonalMenu {...currentUser} />
        </div>
      </div>
    </div>
  </>
);

export default BillingHeader;
