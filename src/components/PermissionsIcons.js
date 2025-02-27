import React from 'react';
import Icons from '../assets/icons';
import styled from 'styled-components';

const PermissionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 110px;
`;

export default props => {
  return (
    <PermissionIcons style={{ maxWidth: '120px', minWidth: '0px', margin: 'auto' }} {...props}>
      <Icons.CalendarEdit {...props} color={props.events.create ? '#c0b69b' : '#D8D8D8'} />
      <Icons.CalendarDelete {...props} color={props.events.delete ? '#c0b69b' : '#D8D8D8'} />
      <Icons.Billing {...props} color={props.billing.create ? '#c0b69b' : '#D8D8D8'} />
      <Icons.ManageStaff {...props} color={props.staff.create ? '#c0b69b' : '#D8D8D8'} />
    </PermissionIcons>
  );
};
