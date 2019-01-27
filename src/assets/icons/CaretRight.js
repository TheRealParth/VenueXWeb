import React from 'react';
import withStyles from './withIconStyles';

const CaretRight = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 9 16">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M.384 2.226a1.298 1.298 0 0 1 0-1.842 1.298 1.298 0 0 1 1.842 0l6.398 6.382c.25.25.376.575.376.929 0 .338-.131.66-.376.929L2.226 15.02a1.28 1.28 0 0 1-.913.377 1.298 1.298 0 0 1-.93-2.218l5.47-5.485-5.47-5.469z"
    />
  </svg>
);
CaretRight.defaultProps = {
  size: 24
};

export default withStyles(CaretRight);
