import React from 'react';
import styles from './share.module.scss';
import ShareTop from './ShareTop';
import ShareBottom from './ShareBottom';

const Share: React.FC = () => {

  return (
    <div className={styles.share}>
      <ShareTop/>
      <hr/>
      <ShareBottom/>
    </div>
  );
};

export default Share;