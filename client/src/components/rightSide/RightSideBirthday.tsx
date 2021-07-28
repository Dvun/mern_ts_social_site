import React from 'react';
import styles from './RightSideBirthday.module.scss';

const RightSideBirthday: React.FC = () => {

  return (
    <div className={styles.birthDayContainer}>
      <img className={styles.gift} src="assets/gift.png" alt="present"/>
      <span>
        <b>Roman Seveljov</b> and <b>3 other peoples</b> have a birthday today!
      </span>
    </div>
  );
};

export default RightSideBirthday;