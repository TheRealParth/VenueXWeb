import React from 'react';
import withStyles from './withIconStyles';

const ChairIcon = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M18.53 13.726c0-1.473-.804-2.41-2.143-2.41H7.813c-1.34 0-2.076.937-2.076 2.41H18.53zM8.75 5.354h6.766V3.88H8.751v1.474zm6.766 1.138H8.751v4.22H7.545V2.474C7.545 1.67 8.215 1 9.02 1h6.23c.736 0 1.406.67 1.406 1.474v8.238h-1.139v-4.22zm-9.11 9.378v6.23c0 .937-1.406.937-1.406 0v-7.638h14.2V22.1c0 .937-1.407.937-1.407 0v-6.23H6.407z"
    />
  </svg>
);

ChairIcon.defaultProps = {
  size: 24
};

export default withStyles(ChairIcon);
