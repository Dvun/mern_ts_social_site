import React from 'react';
import styles from './friendItem.module.scss'
import {IUser} from '../../interfaces/interfaces';
import {Link} from 'react-router-dom'

interface IFriendItem {
  user: IUser
}

const FriendItem: React.FC<IFriendItem> = ({user}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  return (
    <>
      <li className={styles.friendItem}>
        <Link to={`/profile/${user.userName}`}>
          <img src={PF + user.profilePicture} alt="person"/>
          <span className={styles.friendName}>{`${user.firstName} ${user.lastName}`}</span>
          <span className={styles.online}/>
        </Link>
      </li>
    </>
  );
};

export default FriendItem;
