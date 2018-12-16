import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import classNames from 'classnames';
import menuItems from './menuItems';

const Sidebar = withRouter(({ children, location }) => (
  <>
    <div className={styles.layout}>
      <div className={styles.container}>
        {menuItems.map(({ id, label, route, icon }) => (
          <Link
            key={id}
            className={classNames({
              [styles.item]: true,
              [styles.active]: location.pathname.toLowerCase().indexOf(route) !== -1
            })}
            to={route}
          >
            <img className={styles.icon} src={icon} />
            <div>{label}</div>
          </Link>
        ))}
      </div>
      {children}
    </div>
    <styles>{`

    `}</styles>
  </>
));

export { Sidebar };
