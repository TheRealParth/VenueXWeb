import React from 'react';
import withStyles from './withIconStyles';

const People = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 10 17">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M8.76 14.027a1.298 1.298 0 0 1 0 1.842 1.298 1.298 0 0 1-1.841 0L.52 9.487a1.29 1.29 0 0 1-.376-.93c0-.338.13-.66.376-.928l6.397-6.398a1.28 1.28 0 0 1 .914-.376 1.298 1.298 0 0 1 .93 2.218l-5.47 5.485 5.469 5.469z"
    />
  </svg>
);
People.defaultProps = {
  size: 24
};

export default withStyles(People);
