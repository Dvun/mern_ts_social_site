import React from 'react';
import styles from './shareTop.module.scss'

const ShareTop: React.FC = () => {

  return (
    <div className={styles.shareTop}>
      <img src="/assets/person/defaultPerson.png" alt="profile"/>
      <input type="text" placeholder='What is in your mind ?'/>
    </div>
  );
};

export default ShareTop;