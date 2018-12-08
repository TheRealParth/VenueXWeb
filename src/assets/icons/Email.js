import React from 'react';
import { withTheme } from 'styled-components';

const Email = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M21.31 3.25c1.353 0 2.44 1.22 2.44 2.694v12.352c0 1.476-1.088 2.704-2.44 2.704H2.69C1.338 21 .25 19.772.25 18.296V5.944c0-1.473 1.087-2.694 2.44-2.694h18.62zM2.737 4.94l8.756 8.784c.32.322.72.322 1.04 0l8.74-8.784H2.737zm-.892 1.434v11.922c0 .039.002.077.006.115l5.839-6.17-5.845-5.867zm20.31.01l-5.82 5.848 5.816 6.162c.002-.032.004-.065.004-.098V6.384zm-8.523 8.566a2.255 2.255 0 0 1-3.238 0l-1.547-1.555-5.601 5.915h17.519l-5.578-5.924-1.555 1.564z"
    />
  </svg>
);

Email.defaultProps = {
  size: 24
};

export default withTheme(Email);
