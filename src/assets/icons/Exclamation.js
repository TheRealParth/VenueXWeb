import React from 'react';
import { withTheme } from 'styled-components';

const Exclamation = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 4 14">
    <path
      d="M2 9.5A1.5 1.5 0 0 0 3.5 8V2a1.5 1.5 0 0 0-3 0v6A1.5 1.5 0 0 0 2 9.5zm0 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
      fill={props.color ? props.color : props.theme.colors.primary}
    />
  </svg>
);
Exclamation.defaultProps = {
  size: 24
};

export default withTheme(Exclamation);
