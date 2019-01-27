import React from 'react';
import withStyles from './withIconStyles';

const Camera = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="nonzero"
      d="M5.57 3.57v16.17h5.132c.515 0 .935.42.935.935 0 .515-.42.936-.935.936H4.635a.937.937 0 0 1-.935-.936V2.635c0-.515.42-.935.935-.935h6.067c.515 0 .935.42.935.935 0 .515-.42.935-.935.935H5.57zm12.577 7.15L16.27 8.818a.914.914 0 0 1 0-1.313.914.914 0 0 1 1.314 0L21.046 11a.984.984 0 0 1 0 1.312l-3.463 3.495a.912.912 0 0 1-1.299.014c-.388-.34-.388-.954-.016-1.326l1.879-1.903h-8.97a.937.937 0 0 1-.935-.936c0-.515.42-.935.935-.935h8.97z"
    />
  </svg>
);
Camera.defaultProps = {
  size: 24
};

export default withStyles(Camera);
