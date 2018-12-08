import React from 'react';
import { withTheme } from 'styled-components';

const Crown = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 17 13">
    <path
      d="M1.85 5.795a1.768 1.768 0 1 1 2.131-1.742c0 .528-.234 1.022-.63 1.354l2.014 1.639 2.282-2.84a1.768 1.768 0 1 1 1.828.005l2.133 2.838 2.17-1.66a1.768 1.768 0 1 1 1.512.402l-.823 4.247v1.776a.568.568 0 0 1-.567.568l-10.658.012a.568.568 0 0 1-.568-.568l.004-1.74-.827-4.291zm11.482 5.451v-.69H3.81v.7l9.522-.01zm1.6-7.825a.632.632 0 1 0 0 1.264.632.632 0 0 0 0-1.264zm-6.36-.097a.632.632 0 1 0 0-1.264.632.632 0 0 0 0 1.264zm-.015 1.557L5.893 8.203a.568.568 0 0 1-.801.086L3.198 6.745 3.71 9.42h9.725l.524-2.74-2.112 1.618a.568.568 0 0 1-.8-.108L8.556 4.88zm-6.346-.19a.632.632 0 1 0 0-1.265.632.632 0 0 0 0 1.264z"
      fillRule="nonzero"
      fill={props.color ? props.color : props.theme.colors.primary}
    />
  </svg>
);
Crown.defaultProps = {
  size: 24
};

export default withTheme(Crown);
