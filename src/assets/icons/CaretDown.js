import React from 'react';
import { fillOverride, strokeOverride } from '../styles/global.module.scss';
import { withTheme } from 'styled-components';
import classnames from 'classnames';

const CaretDown = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 14 9">
    <path
      className={classnames([fillOverride, strokeOverride])}
      d="M1.467 2.134a.702.702 0 0 1 1.2-.506l4.803 4.79 4.79-4.79a.702.702 0 0 1 .998 0 .702.702 0 0 1 0 .999L7.975 7.922a.696.696 0 0 1-.505.203.751.751 0 0 1-.506-.203L1.67 2.627a.688.688 0 0 1-.202-.493z"
    />
  </svg>
);

export default withTheme(CaretDown);
