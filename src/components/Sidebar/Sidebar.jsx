import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import classNames from 'classnames';
import menuItems from './menuItems';

// class Sidebar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.props;
//   }
// }

const Sidebar = ({ children, location, config }) => (
  <>
    <div className={styles.layout}>
      <div className={styles.container}>
        <img src={config.theme.logo} className={styles.logo} />
        {menuItems.map(({ id, label, route, icon }) => (
          <Link
            key={id}
            className={
              location.pathname.toLowerCase().indexOf(route) !== -1
                ? styles.SideBarActiveItem
                : styles.SideBarItem
            }
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
);

export { Sidebar };
