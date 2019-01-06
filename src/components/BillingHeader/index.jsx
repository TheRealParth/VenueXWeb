import React from 'react';
import { BillingHeaderContainer, ContactInfo } from './index.module.scss';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';


const BillingHeader = () => (
  <>
    <div className={BillingHeaderContainer}>
      <div className={ContactInfo}>VenueX: 201-448-9419 | billing@teamvenuex.com</div>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </div>
  </>
);

export default BillingHeader;
