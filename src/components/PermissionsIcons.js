import React from 'react';
import Icons from 'assets/icons';
import styled from 'styled-components';

const PermissionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 110px;
`;

export default ({ ...restProps }) => (
  <PermissionIcons {...restProps}>
    <Icons.CalendarEdit
      {...restProps}
      color={restProps.edit ? '' : '#D8D8D8'}
    />
    <Icons.CalendarDelete
      {...restProps}
      color={restProps.delete ? '' : '#D8D8D8'}
    />
    <Icons.Billing {...restProps} color={restProps.billing ? '' : '#D8D8D8'} />
    <Icons.ManageStaff
      {...restProps}
      color={restProps.manageStaff ? '' : '#D8D8D8'}
    />
  </PermissionIcons>
);
