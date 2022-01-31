import React from 'react';
import styles from './profileFriends.module.scss'
import {ReactComponent as DeleteIcon} from './../../assets/delete.svg';
import defaultPerson from '../../assets/defaultPerson.png'


const ProfileFriends: React.FC = () => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  const handleWatchProfile = () => {
    console.log('watch');
  }

  const handleDeleteFriend = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    console.log('delete');
  }

  return (
    <div className={styles.profileFriends}>
      <h4>User Friends</h4>
      <div className={styles.userFriendsItems}>

        <div className={styles.userFriendsItem} onClick={handleWatchProfile}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

        <div className={styles.userFriendsItem}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

        <div className={styles.userFriendsItem}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

        <div className={styles.userFriendsItem}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

        <div className={styles.userFriendsItem}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

        <div className={styles.userFriendsItem}>
          <img src={PF + 'person/1.jpeg' || defaultPerson} alt="person"/>
          <span>Roman Seveljov</span>
          <DeleteIcon onClick={(e) => handleDeleteFriend(e)}/>
        </div>

      </div>
    </div>
  );
};

export default ProfileFriends;
