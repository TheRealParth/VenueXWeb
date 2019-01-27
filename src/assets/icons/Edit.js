import React from 'react';
import withStyles from './withIconStyles';

const Edit = ({ color, size = 25, theme }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={color ? color : theme.colors.primary}
      fillRule="nonzero"
      d="M2.46 22.385l.02.02a.863.863 0 0 0 .744.23l6.575-1.16a.858.858 0 0 0 .458-.241l.003.002L22.07 9.417a2.581 2.581 0 0 0 0-3.646l-2.996-3a2.559 2.559 0 0 0-1.822-.753c-.687 0-1.338.266-1.822.753L3.617 14.591l.003.002a.858.858 0 0 0-.24.459l-1.161 6.58a.876.876 0 0 0 .24.753zM13.28 7.352l4.213 4.216-8.25 8.26-5.116.901.902-5.119 8.25-8.258zm3.362-3.366a.85.85 0 0 1 .607-.25.85.85 0 0 1 .608.25l2.999 3a.863.863 0 0 1 0 1.217L18.71 10.35l-4.213-4.217 2.145-2.148z"
    />
  </svg>
);

Edit.defaultProps = {
  size: 24
};

export default withStyles(Edit);
