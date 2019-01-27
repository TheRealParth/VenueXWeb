import React from 'react';
import withStyles from './withIconStyles';

const Search = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 14 14">
    <path
      fill={props.color ? props.color : props.theme.colors.primary}
      d="M9.496 7.922A5.153 5.153 0 0 0 5.153 0 5.154 5.154 0 0 0 0 5.156a5.153 5.153 0 0 0 7.949 4.33l.234-.163L11.859 13c.71.503 1.575-.43 1.141-1.161L9.327 8.162l.17-.24zM7.558 2.754c.64.64.994 1.493.994 2.399a3.37 3.37 0 0 1-.994 2.398 3.37 3.37 0 0 1-2.399.994 3.37 3.37 0 0 1-2.398-.994 3.37 3.37 0 0 1-.994-2.398c0-.906.353-1.759.994-2.4a3.37 3.37 0 0 1 2.398-.993 3.37 3.37 0 0 1 2.4.994z"
    />
  </svg>
);
Search.defaultProps = {
  size: 24
};

export default withStyles(Search);
