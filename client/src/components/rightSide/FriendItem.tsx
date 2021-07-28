import React from 'react';
import styles from './friendItem.module.scss'
import {IUser} from '../../interfaces/interfaces';

interface IFriendItem {
  user: IUser
}

const FriendItem: React.FC<IFriendItem> = ({user}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  return (
    <>
      <li className={styles.friendItem}>
        <img src={PF + user.profilePicture} alt="person"/>
        <span className={styles.friendName}>{`${user.firstName} ${user.lastName}`}</span>
        <span className={styles.online}/>
      </li>
    </>
  );
};

export default FriendItem;