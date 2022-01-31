import React from 'react'
import styles from './friendItem.module.scss'
import {IUser} from '../../interfaces/interfaces'
import {Link} from 'react-router-dom'
import defaultPerson from '../../assets/defaultPerson.png'


interface IFriendItemProps {
  user: IUser
}

const FriendItem: React.FC<IFriendItemProps> = ({user}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  return (
    <li className={styles.friendItem}>
      <Link to={`/profile/${user.userName}`}>
        <img src={PF + user.profilePicture || defaultPerson} alt="person"/>
        <span className={styles.friendName}>{`${user.firstName} ${user.lastName}`}</span>
        <span className={styles.online}/>
      </Link>
    </li>
  );
};

export default FriendItem;
