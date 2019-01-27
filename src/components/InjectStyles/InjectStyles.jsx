import React from 'react';
import { ContactInfo } from '../BillingHeader/index.module.scss';
import { EmployeeModalHeader, FormSection } from '../StaffTable/styles.module.scss';
import { AddEventModalHeader, AddEventModalSection } from '../events/index.module.scss';
import { PrimaryButton } from '../Button/index.module.scss';
import { EventDetailHeader } from '../events/EventDetailModal/index.module.scss';
import { SideBarItem, SideBarActiveItem } from '../Sidebar/index.module.scss';
import { AddButton } from '../AddButton/index.module.scss';

const InjectStyles = ({ colors }) => (
  <style>{`
    .${AddEventModalHeader},
    .${EmployeeModalHeader},
    .${FormSection},
    .${AddEventModalSection},
    .${EventDetailHeader},
    .rbc-event {
      background-color: ${colors.primary}66;
    }
    .${PrimaryButton},
    .${AddButton} {
      background-color: ${colors.primary};
    }
    .${SideBarItem}:hover,
    .${SideBarActiveItem}:hover { 
      background-color: ${colors.primary}4D;

    }
    .${SideBarActiveItem} { 
      background-color: ${colors.primary}99;
      border-left: 5px solid ${colors.primary};
    }
    `}</style>
);

InjectStyles.defaultProps = {
  colors: {}
};

export { InjectStyles };
