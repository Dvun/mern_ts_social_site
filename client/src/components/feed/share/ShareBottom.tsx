import React from 'react';
import styles from './shareBottom.module.scss'
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons';

const ShareBottom: React.FC = () => {

  return (
    <div className={styles.shareBottom}>
      <div className={styles.shareOptions}>

        <div className={styles.shareOption}>
          <PermMedia htmlColor='tomato'/>
          <span>Photo or Video</span>
        </div>

        <div className={styles.shareOption}>
          <Label htmlColor='blue'/>
          <span>Tag</span>
        </div>

        <div className={styles.shareOption}>
          <Room htmlColor='green'/>
          <span>Location</span>
        </div>

        <div className={styles.shareOption}>
          <EmojiEmotions htmlColor='goldenrod'/>
          <span>Feelings</span>
        </div>

      </div>
      <button>Share</button>
    </div>
  );
};

export default ShareBottom;