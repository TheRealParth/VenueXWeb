import React from 'react';
import withStyles from './withIconStyles';

const CalendarDelete = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 24 22">
    <g
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="evenodd"
    >
      <path d="M2.424 6.711h17.278V5.294c0-.78-.636-1.416-1.417-1.416h-1.417V4.99h-1.611V3.88h-8.39v1.11h-1.61V3.876H3.842c-.781 0-1.417.636-1.417 1.417v1.417zm17.278 3.052v-1.44h-1.89s-1.416-1.643-3.207 0H2.424v9.748c0 .782.636 1.416 1.417 1.416h14.444c.78 0 1.417-.634 1.417-1.416v-1.849l1.61 1.541v.31a3.032 3.032 0 0 1-3.027 3.028H3.84a3.032 3.032 0 0 1-3.028-3.028V5.295A3.032 3.032 0 0 1 3.84 2.267h1.416V.6h1.61v1.667h8.39V.6h1.61v1.667h1.418a3.032 3.032 0 0 1 3.028 3.027V8.18l-1.611 1.583z" />
      <path d="M19.534 14.532l2.524 2.524c.409.409 1.124.417 1.548.018.426-.426.435-1.13.009-1.557l-2.533-2.533 2.524-2.524a1.095 1.095 0 0 0 0-1.548c-.412-.412-1.135-.411-1.548 0l-2.524 2.524-2.524-2.532c-.41-.411-1.135-.412-1.548 0a1.094 1.094 0 0 0 0 1.547l2.524 2.532-2.533 2.526a1.108 1.108 0 0 0 .01 1.564c.408.385 1.116.397 1.538 0l2.533-2.541z" />
    </g>
  </svg>
);

CalendarDelete.defaultProps = {
  size: 24
};

export default withStyles(CalendarDelete);
