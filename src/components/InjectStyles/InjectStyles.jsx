import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
const InjectStyles = ({ colors }) => (
  <style>{`
    .${ContactInfo} {
      
    }
  `}</style>
);

InjectStyles.defaultProps = {
  colors: {}
};

export { InjectStyles };
