import React from 'react';
import styles from './postTop.module.scss'
import {MoreVert} from '@material-ui/icons';
import {IUser} from '../../../interfaces/interfaces';

interface IPostTopProps {
  date: string
  user: IUser
}

const PostTop: React.FC<IPostTopProps> = ({date, user}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  return (
    <div className={styles.postTop}>
      <div className={styles.postTopLeft}>
        <img src={PF + user.profilePicture} alt="person"/>
        <div className={styles.nameAndTime}>
          <span className={styles.name}>{`${user.firstName} ${user.lastName}`}</span>
          <span className={styles.time}>{date}</span>
        </div>
      </div>
      <div className={styles.postTopRight}>
        <MoreVert/>
      </div>
    </div>
  );
};

export default PostTop;