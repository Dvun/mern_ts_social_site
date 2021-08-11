import React, {useState} from 'react';
import styles from './profile.module.scss';
import {CameraAlt} from '@material-ui/icons';
import axios from 'axios';

const Profile: React.FC = () => {
  const [avatarPreview, setAvatarPreview] = useState('');
  const data = new FormData()

  const handleChange = async (e: any) => {
    if (e.target.files.length !== 0) {
      const image = e.target.files[0]
      setAvatarPreview(URL.createObjectURL(e.target.files[0]));
      data.append('fileForDir', 'avatar')
      data.append('userId', 'kjh23h34kh34kh2566766')
      data.append('file', image)
    }
    const config = {
      headers: {'Content-Type': 'multipart/form-data'},
    }
    await axios.post('http://localhost:5000/api/upload', data)
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileCover}>
          <img className={styles.backGroundImg} src="/assets/post/3.jpeg" alt="cover"/>
          <div className={styles.personPic}>
            <img className={styles.personImg} src={`${avatarPreview}` || '/assets/person/defaultPerson.png'} alt="person"/>
            <div className={styles.changePic}>
              <input type="file" id="changePic" name='avatar' onChange={(e) => handleChange(e)} hidden accept="image/*"/>
              <label htmlFor="changePic"><CameraAlt/></label>
            </div>
          </div>
          <div className={styles.changeBackground}>
            <input type="file" id="changeBackground" hidden accept="image/*"/>
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
