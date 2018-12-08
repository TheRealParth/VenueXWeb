import React from 'react';
import { withTheme } from 'styled-components';

const Line = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 12 12">
    <path
      fill="none"
      fillRule="evenodd"
      stroke={props.color ? props.color : props.theme.colors.primary}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.2}
      d="M1.5 6.5h9"
    />
  </svg>
);
Line.defaultProps = {
  size: 24
};

export default withTheme(Line);
