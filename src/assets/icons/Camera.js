import React from 'react';
import withStyles from './withIconStyles';

const Camera = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M7.842 2.49L6.2 5.296H3.4a2.412 2.412 0 0 0-2.4 2.4v10.6c0 1.315 1.084 2.4 2.4 2.4h17.2c1.316 0 2.4-1.085 2.4-2.4v-10.6c0-1.315-1.084-2.4-2.4-2.4h-2.8L16.158 2.49a.8.8 0 0 0-.691-.391H8.533a.8.8 0 0 0-.083 0 .8.8 0 0 0-.608.391zm1.15 1.208h6.016l1.634 2.8a.8.8 0 0 0 .691.4H20.6c.457 0 .8.342.8.8v10.599c0 .457-.343.8-.8.8H3.4a.781.781 0 0 1-.8-.8v-10.6c0-.457.343-.8.8-.8h3.267a.8.8 0 0 0 .691-.4l1.634-2.8zm3.008 4a4.812 4.812 0 0 0-4.8 4.799c0 2.641 2.159 4.8 4.8 4.8s4.8-2.159 4.8-4.8-2.159-4.8-4.8-4.8zm0 1.6c1.777 0 3.2 1.422 3.2 3.199s-1.423 3.2-3.2 3.2a3.188 3.188 0 0 1-3.2-3.2c0-1.777 1.423-3.2 3.2-3.2z"
    />
  </svg>
);
Camera.defaultProps = {
  size: 24
};

export default withStyles(Camera);
