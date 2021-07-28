import React from 'react';
import styles from './topBar.module.scss';
import TopBarLeft from './TopBarLeft';
import TopBarCenter from './TopBarCenter';
import TopBarRight from './TopBarRight';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
        <TopBarLeft/>
        <TopBarCenter/>
        <TopBarRight/>
    </div>
  );
};

export default TopBar;