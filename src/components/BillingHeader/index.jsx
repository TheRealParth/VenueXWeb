import React from 'react';
import { BillingHeaderContainer, ContactInfo } from './index.module.scss';
import CaretLeft from '../../assets/icons/CaretLeft';
import CaretRight from '../../assets/icons/CaretRight';
import PersonalMenu from '../PersonalMenu';
import AddButton from '../AddButton';


const BillingHeader = ({
  handlePrevMonth,
  handleNextMonth,
  currentUser,
  openModal,
  label
}) => (
    <>
      <div className={BillingHeaderContainer}>

        <div className="rbc-toolbar" style={{ width: '100%' }}>
          <div className="rbc-btn-group">
            <div className={ContactInfo}>VenueX: 201-448-9419 | billing@teamvenuex.com</div>
            <button
              type="button"
              className={'rbc-btn-navi-left'}
              onClick={handlePrevMonth}
            >
              <CaretLeft size={16} color="#c0b69b" />
            </button>

            <div className="rbc-toolbar-label">{label}</div>

            <button
              type="button"
              className={'rbc-btn-navi-right'}
              onClick={handleNextMonth}
            >
              <CaretRight size={16} color="#c0b69b" />
            </button>
          </div>
          <div>
            {' '}
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <PersonalMenu {...currentUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

export default BillingHeader;
