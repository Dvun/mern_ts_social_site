import React from 'react';
import {Link} from 'react-router-dom';
import styles from './topBarLeft.module.scss';
import {RoutesEnum} from '../../interfaces/routeInterfaces';

const TopBarLeft: React.FC = () => {

  return (
    <div className={styles.topBarLeft}>
      <Link to={RoutesEnum.HOME}>
        <span>SOCIAL MEDIA</span>
      </Link>
    </div>
  );
};

export default TopBarLeft;