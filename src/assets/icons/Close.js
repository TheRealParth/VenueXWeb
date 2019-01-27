import React from 'react';
import withStyles from './withIconStyles';

const Close = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 10 10">
    <path
      d="M.253 9.747c.173.163.402.25.619.25a.919.919 0 0 0 .619-.25L5 6.227l3.509 3.51c.174.173.402.26.62.26a.919.919 0 0 0 .618-.25.872.872 0 0 0 0-1.227L6.227 5l3.51-3.509a.872.872 0 0 0 0-1.228.872.872 0 0 0-1.228 0L5 3.773 1.491.252a.872.872 0 0 0-1.228 0 .872.872 0 0 0 0 1.227L3.773 5 .252 8.509a.885.885 0 0 0 0 1.238z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
);

Close.defaultProps = {
  size: 24
};

export default withStyles(Close);
