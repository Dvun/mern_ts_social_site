import React, {useState} from 'react';
import styles from './topBarRight.module.scss'
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { NavLink } from 'react-router-dom';
import {RoutesEnum} from '../../interfaces/routeInterfaces';

const TopBarRight: React.FC = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)

  const handleOpenMenu = () => {
    setHiddenMenu(prevState => !prevState)
  }

  return (
    <div className={styles.topBarRight}>
      <ul className={styles.topBarMenu}>
        <NavLink to={RoutesEnum.HOME} activeClassName={styles.linkActive}>
          <li>Homepage</li>
        </NavLink>
        <li>Timeline</li>
      </ul>
      <ul className={styles.topBarIcons}>
        <li className={styles.topBarIconsItem}>
          <PersonIcon/>
          <span>1</span>
        </li>
        <li className={styles.topBarIconsItem}>
          <MessageIcon/>
          <span>1</span>
        </li>
        <li className={styles.topBarIconsItem}>
          <NotificationsIcon/>
          <span>1</span>
        </li>
      </ul>
      <img src="/assets/person/1.jpeg" alt="profile"/>
      <div className={!hiddenMenu ? styles.hideMenu : styles.hideMenuOpen} onClick={handleOpenMenu}>
        <span className={styles.hideMenuLine1}/>
        <span className={styles.hideMenuLine2}/>
        <span className={styles.hideMenuLine3}/>
      </div>
    </div>
  );
};

export default TopBarRight;