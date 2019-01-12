import React from 'react';
import { withTheme } from 'styled-components';

const User = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 19 21">
    <g
      fill={props.color ? props.color : '#c0b59d'}
      stroke={props.color ? props.color : '#c0b59d'}
      fillRule="evenodd"
    >
      <path d="M9.445 9.499c4.638 0 8.4 3.766 8.4 8.4 0 .671-.079 1.324-.225 1.95a.294.294 0 1 1-.573-.135c.136-.583.21-1.19.21-1.815a7.807 7.807 0 0 0-7.812-7.811 7.809 7.809 0 0 0-7.598 9.624.294.294 0 0 1-.573.137 8.382 8.382 0 0 1-.23-1.95c0-4.634 3.766-8.4 8.401-8.4zM9.445 1.1a3.722 3.722 0 0 1 3.719 3.717c0 2.05-1.67 3.719-3.719 3.719a3.722 3.722 0 0 1-3.716-3.72 3.72 3.72 0 0 1 3.716-3.715zm0 .59a3.121 3.121 0 0 0-3.127 3.127 3.124 3.124 0 0 0 3.127 3.13 3.127 3.127 0 0 0 3.13-3.13 3.124 3.124 0 0 0-3.13-3.127z" />
    </g>
  </svg>
);

User.defaultProps = {
  size: 24
};

export default withTheme(User);
