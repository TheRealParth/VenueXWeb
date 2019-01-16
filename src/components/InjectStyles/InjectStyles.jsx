import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
import { EmployeeModalHeader, FormSection } from '../StaffTable/styles.module.scss';
const InjectStyles = ({ colors }) => (
  <style>{`
    .${EmployeeModalHeader} {
      background-color: ${colors.primary}66;
    }
   .${FormSection} {
      border: 1px solid ${colors.primary}66;
    } `}</style>
);

InjectStyles.defaultProps = {
  colors: {}
};

export { InjectStyles };
