import React from 'react';
import { withTheme } from 'styled-components';

const Checkmark = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 12 12">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M4.177 11.157a1.14 1.14 0 0 1-.814-.342L.325 7.71a1.14 1.14 0 0 1 1.628-1.593l2.111 2.157L9.23 1.33a1.14 1.14 0 1 1 1.82 1.37l-5.962 8.003a1.139 1.139 0 0 1-.91.454z"
    />
  </svg>
);
Checkmark.defaultProps = {
  size: 24
};

export default withTheme(Checkmark);
