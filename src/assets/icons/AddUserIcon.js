import React from 'react';
import withStyles from './withIconStyles';

const AddUserIcon = props => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 26 22">
    <g
      fill={props.color ? props.color : props.theme.colors.primary}
      fillRule="evenodd"
    >
      <path d="M22.234 10.929h-2.111l.002-2.116a.59.59 0 0 0-.586-.588.59.59 0 0 0-.588.588l-.003 2.115-2.116-.003a.596.596 0 0 0-.591.588v.009a.607.607 0 0 0 .175.409c.106.106.255.17.41.176l2.121-.004v2.112a.594.594 0 0 0 .582.595.591.591 0 0 0 .593-.587v-2.12h2.112a.59.59 0 0 0 .588-.587.589.589 0 0 0-.588-.587z" />
      <path
        fillRule="nonzero"
        d="M19.5 5.28a6.21 6.21 0 0 0-6.165 5.544 8.887 8.887 0 0 0-3.551-.833C12 9.869 13.77 8.043 13.77 5.796A4.22 4.22 0 0 0 9.554 1.58a4.222 4.222 0 0 0-4.219 4.216c0 2.245 1.768 4.068 3.98 4.195-4.802.127-8.662 4.056-8.662 8.888 0 .698.081 1.389.239 2.062a.793.793 0 0 0 1.32.399.792.792 0 0 0 .226-.766 7.453 7.453 0 0 1-.196-1.696 7.308 7.308 0 0 1 7.312-7.312c1.379 0 2.668.381 3.768 1.044.034.021.062.049.096.07a6.218 6.218 0 0 0 3.194 4.281l.004.017a7.343 7.343 0 0 1 .05 3.597.794.794 0 0 0 1.545.372 8.903 8.903 0 0 0 .243-2.069l-.09-1.271-.007-.037c.37.068.751.109 1.142.109 3.419 0 6.2-2.781 6.2-6.2A6.206 6.206 0 0 0 19.5 5.28zm-12.575.517a2.624 2.624 0 0 1 2.63-2.627 2.622 2.622 0 0 1 2.627 2.627 2.624 2.624 0 0 1-2.627 2.63 2.627 2.627 0 0 1-2.63-2.63zM19.5 16.28a4.806 4.806 0 0 1-4.8-4.8c0-2.647 2.153-4.8 4.8-4.8s4.8 2.153 4.8 4.8-2.154 4.8-4.8 4.8z"
      />
    </g>
  </svg>
);

AddUserIcon.defaultProps = {
  size: 24
};

export default withStyles(AddUserIcon);
