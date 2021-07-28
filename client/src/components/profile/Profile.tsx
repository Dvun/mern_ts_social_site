import React from 'react';
import styles from './profile.module.scss';
import {CameraAlt} from '@material-ui/icons';

const Profile: React.FC = () => {

  return (
    <div className={styles.profile}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileCover}>
          <img className={styles.backGroundImg} src="/assets/post/3.jpeg" alt="cover"/>
          <div className={styles.personPic}>
            <img className={styles.personImg} src="/assets/person/7.jpeg" alt="person"/>
            <div className={styles.changePic}>
              <input type="file" id='changePic' hidden accept='image/*'/>
              <label htmlFor="changePic"><CameraAlt/></label>
            </div>
          </div>
          <div className={styles.changeBackground}>
            <input type="file" id='changeBackground' hidden accept='image/*'/>
            <label htmlFor="changeBackground">Change background</label>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h4>Roman Seveljov</h4>
          <span>Hello my Friends!</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;