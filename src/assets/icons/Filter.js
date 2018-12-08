import React from 'react';
import { withTheme } from 'styled-components';

const Filter = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M18.54 4.866l-5.451 6.772v8.97l-2.431-2.126v-6.843L5.206 4.866a.232.232 0 0 1-.03-.258.232.232 0 0 1 .22-.138H18.35a.233.233 0 0 1 .22.138.233.233 0 0 1-.03.258m-.19-1.855H5.396c-.661 0-1.25.37-1.535.967A1.69 1.69 0 0 0 4.07 5.78l5.13 6.372v6.439c0 .351.15.685.414.915l2.917 2.552c.358.317.869.392 1.303.192.436-.194.716-.629.713-1.107v-8.991l5.129-6.372a1.69 1.69 0 0 0 .209-1.802 1.688 1.688 0 0 0-1.535-.967"
    />
  </svg>
);
Filter.defaultProps = {
  size: 24
};

export default withTheme(Filter);
