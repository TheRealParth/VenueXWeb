import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
import { EmployeeModalHeader, FormSection } from '../StaffTable/styles.module.scss';
import { AddEventModalHeader, AddEventModalSection } from '../events/index.module.scss';
import { PrimaryButton } from '../Button/index.module.scss';
import { EventDetailHeader } from '../events/EventDetailModal/index.module.scss';

const InjectStyles = ({ colors }) => (
  <style>{`
    .${AddEventModalHeader} {
      background-color: ${colors.primary}66;
      }
    .${EmployeeModalHeader} {
      background-color: ${colors.primary}66;
      }
    .${PrimaryButton} {
      background-color: ${colors.primary};
    }
    .${FormSection} {
      border: 1px solid ${colors.primary}66;
    }
   .${AddEventModalSection}{
      border: 1px solid ${colors.primary}66;
    }
    .${EventDetailHeader} {
      background-color: ${colors.primary}66;
    }
    `}</style>
);

InjectStyles.defaultProps = {
  colors: {}
};

export { InjectStyles };
