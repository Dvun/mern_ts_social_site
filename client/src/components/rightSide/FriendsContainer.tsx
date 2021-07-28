import React from 'react';
import styles from './friendsContainer.module.scss';
import FriendItem from './FriendItem';
import {Users} from '../../dummyData';

const FriendsContainer: React.FC = () => {

  return (
    <div className={styles.friendsContainer}>
      <h4>Friends</h4>
      <ul>
        {
          Users.map(user => (
            <FriendItem key={user.id} user={user}/>
          ))
        }
      </ul>
    </div>
  );
};

export default FriendsContainer;