import React from 'react';
import withStyles from './withIconStyles';

const Key = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 24">
    <g fill={props.color ? props.color : props.theme.colors.primary}>
      <path d="M5.021 16.445a4.904 4.904 0 0 1-4.897-4.898c0-2.7 2.197-4.897 4.897-4.897S9.92 8.848 9.92 11.547c0 2.7-2.198 4.898-4.898 4.898zm0-8.084a3.19 3.19 0 0 0-3.187 3.186 3.19 3.19 0 0 0 3.187 3.187 3.19 3.19 0 0 0 3.187-3.187 3.191 3.191 0 0 0-3.187-3.186z" />
      <path d="M23.273 11.897H9.126a.856.856 0 0 1 0-1.71h14.147a.855.855 0 0 1 0 1.71z" />
      <path d="M20.902 11.547a.856.856 0 0 1 1.71 0v2.527a.855.855 0 0 1-.854.855h-4.042a.856.856 0 0 1-.856-.855v-2.527a.856.856 0 0 1 1.71 0v1.671h2.332v-1.67z" />
      <path d="M19.737 13.413a.856.856 0 0 1-.856-.855v-1.01a.856.856 0 0 1 1.71 0v1.01a.855.855 0 0 1-.854.855z" />
    </g>
  </svg>
);
Key.defaultProps = {
  size: 24
};

export default withStyles(Key);
