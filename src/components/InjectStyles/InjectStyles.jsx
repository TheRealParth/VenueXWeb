import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
import { EmployeeModalHeader, FormSection } from '../StaffTable/styles.module.scss';
import { AddEventModalHeader, AddEventModalSection } from '../events/index.module.scss';
import { PrimaryButton } from '../Button/index.module.scss';

const InjectStyles = ({ colors }) => (
  <style>{`
    .${(EmployeeModalHeader, AddEventModalHeader)} {
      background-color: ${colors.primary}66;
    .${ContactInfo} {
      
    }
    .${PrimaryButton} {
      background-color: ${colors.primary};
    }
   .${(FormSection, AddEventModalSection)} {
      border: 1px solid ${colors.primary}66;
    } `}</style>
);

InjectStyles.defaultProps = {
  colors: {}
};

export { InjectStyles };
