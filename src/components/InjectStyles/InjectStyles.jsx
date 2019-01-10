import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
const InjectStyles = ({ colors }) => (
  <style>{`
    .${ContactInfo} {
      color: ${colors.primary};
    }
  `}</style>
);

InjectStyles.defaultProps = {
  colors: {

  }
}

export { InjectStyles };
