import React from 'react';
import { withTheme } from 'styled-components';

const Plus = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 16 16">
    <path
      d="M6.732 6.731l.007-4.57c0-.697.57-1.267 1.268-1.267.697 0 1.268.57 1.268 1.268l-.007 4.57h4.561c.698 0 1.268.57 1.268 1.268 0 .697-.57 1.268-1.268 1.268H9.267v4.578c0 .697-.57 1.268-1.28 1.267a1.319 1.319 0 0 1-.885-.378 1.282 1.282 0 0 1-.371-.905V9.268l-4.583.007a1.319 1.319 0 0 1-.885-.378 1.319 1.319 0 0 1-.378-.884v-.02c.011-.7.57-1.258 1.276-1.269l4.57.007z"
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="nonzero"
    />
  </svg>
);
Plus.defaultProps = {
  size: 24
};

export default withTheme(Plus);
