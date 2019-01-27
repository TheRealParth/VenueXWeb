import React from 'react';
import withStyles from './withIconStyles';

const CaretDown = ({ size, theme }) => (
  <svg width={size} height={size} viewBox="0 0 14 9">
    <path
      fill={theme.colors.colorPrimary ? theme.colors.colorPrimary : ""}
      d="M1.467 2.134a.702.702 0 0 1 1.2-.506l4.803 4.79 4.79-4.79a.702.702 0 0 1 .998 0 .702.702 0 0 1 0 .999L7.975 7.922a.696.696 0 0 1-.505.203.751.751 0 0 1-.506-.203L1.67 2.627a.688.688 0 0 1-.202-.493z"
    />
  </svg>
);

export default withStyles(CaretDown);
