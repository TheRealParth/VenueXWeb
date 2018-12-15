import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import calendarWhiteIcon from '../../assets/calendar-white.svg';
import peopleWhiteIcon from '../../assets/people-white.svg';
import billingWhiteIcon from '../../assets/bill-white.svg';
import styles from './index.module.scss';
import classNames from 'classnames';

const Sidebar = withRouter(({ children, location }) => (
  <div className={styles.layout}>
    <div className={styles.container}>
      <Link
        className={classNames({
          [styles.item]: true,
          [styles.active]: location.pathname.indexOf('/events') !== -1
        })}
        to="/events"
      >
        <img className={styles.icon} src={calendarWhiteIcon} />
        <div>Events overview</div>
      </Link>
      <Link
        className={classNames({
          [styles.item]: true,
          [styles.active]: location.pathname.indexOf('/managestaff') !== -1,
        })}
        to="/managestaff"
      >
        <img className={styles.icon} src={peopleWhiteIcon} />
        <div>Manage Staff</div>
      </Link>
      <Link
        className={classNames({
          [styles.item]: true,
          [styles.active]: location.pathname.indexOf('/billing') !== -1
        })}
        to="/billing"
      >
        <img className={styles.icon} src={billingWhiteIcon} />
        <div>Billing</div>
      </Link>
    </div>
    {children}
  </div>
));

export default Sidebar;
