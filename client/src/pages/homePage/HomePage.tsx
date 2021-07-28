import React from 'react';
import styles from './homePage.module.scss';
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import RightSide from '../../components/rightSide/RightSide';

const HomePage: React.FC = () => {

  return (
    <div className={styles.homePage}>
      <TopBar/>
      <div className={styles.homePageContent}>
        <Sidebar/>
        <Feed/>
        <RightSide/>
      </div>
    </div>
  );
};

export default HomePage;