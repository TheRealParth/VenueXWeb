import React from 'react';
import { withTheme } from 'styled-components';

const CalendarBlank = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 22 22">
    <path
      d="M16.642 2.254h1.417a3.032 3.032 0 0 1 3.028 3.027V18.06a3.031 3.031 0 0 1-3.028 3.028H3.615A3.031 3.031 0 0 1 .587 18.06V5.282a3.031 3.031 0 0 1 3.028-3.028h1.416V.587h1.611v1.667h8.389V.587h1.61v1.667zM2.198 8.309v9.75c0 .78.636 1.416 1.417 1.416H18.06c.78 0 1.416-.636 1.416-1.416v-9.75H2.198zm17.277-3.028c0-.78-.635-1.416-1.416-1.416h-1.417v1.111H15.03v-1.11H6.642v1.11h-1.61V3.863H3.615c-.781 0-1.417.636-1.417 1.417v1.417h17.277V5.281z"
      fillRule="nonzero"
      fill={props.color ? props.color : props.theme.colors.primary}
    />
  </svg>
);

CalendarBlank.defaultProps = {
  size: 24
};

export default withTheme(CalendarBlank);
