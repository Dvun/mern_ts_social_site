import React from 'react';
import styles from './topBarCenter.module.scss'
import SearchIcon from '@material-ui/icons/Search';

const TopBarCenter: React.FC = () => {

  return (
    <div className={styles.topBarCenter}>
      <div className={styles.topBarSearch}>
        <SearchIcon/>
        <input type="text" placeholder='Search for friends, post and any video...'/>
      </div>
    </div>
  );
};

export default TopBarCenter;