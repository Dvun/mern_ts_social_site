import React from 'react';
import styles from './shareTop.module.scss'
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

const ShareTop: React.FC = () => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']
  const {user} = useSelector(({authSlice}: RootState) => authSlice);

  return (
    <div className={styles.shareTop}>
      <img src={user?.profilePicture ? `${PF}${user?._id}/avatar/${user?.profilePicture}` : '/assets/person/defaultPerson.png'} alt="profile"/>
      <input type="text" placeholder='What is in your mind ?'/>
    </div>
  );
};

export default ShareTop;
