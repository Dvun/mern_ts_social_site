import React from 'react';
import styles from './profileRightSide.module.scss';
import ProfileFriends from './ProfileFriends';
import ProfileInfo from './ProfileInfo';

interface IProfileRightSideProps {
  profile?: boolean
}

const ProfileRightSide: React.FC<IProfileRightSideProps> = ({profile}) => {

  return (
    <div className={styles.profileRightSide}>
      <ProfileInfo/>
      <hr/>
      <ProfileFriends/>
    </div>
  );
};

export default ProfileRightSide;