import React from 'react';
import styles from './rightSide.module.scss';
import RightSideBirthday from './RightSideBirthday';
import FriendsContainer from './FriendsContainer';

const RightSide: React.FC = () => {

  return (
    <div className={styles.rightSide}>
      <RightSideBirthday/>

      <div className={styles.rightSideAd}>
        <h4>Advertising's</h4>
        <img className={styles.ad} src="assets/ad.png" alt="ad"/>
      </div>
      <hr/>
      <FriendsContainer/>
    </div>
  );
};

export default RightSide;