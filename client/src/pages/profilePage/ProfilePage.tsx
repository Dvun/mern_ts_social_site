import React from 'react';
import styles from './profilePage.module.scss';
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Profile from '../../components/profile/Profile';
import ProfileRightSide from '../../components/profile/ProfileRightSide';

const ProfilePage: React.FC = () => {

  return (
    <>
      <div className={styles.profilePage}>
        <TopBar/>
        <div className={styles.profilePageContent}>
          <Profile/>
          <Sidebar/>
          <Feed/>
          <ProfileRightSide/>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;