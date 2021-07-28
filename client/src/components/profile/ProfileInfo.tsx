import React from 'react';
import styles from './profileInfo.module.scss'
import {Home, LocationOn, Favorite, Work, School} from '@material-ui/icons';

const ProfileInfo: React.FC = () => {

  const profileInfo = [
    {icon: <Work/>, key: 'Working:', place: 'Best Company OY'},
    {icon: <School/>, key: 'School:', place: 'RVG'},
    {icon: <School/>, key: 'University:', place: 'American University'},
    {icon: <Home/>, key: 'City:', place: 'Kerava'},
    {icon: <LocationOn/>, key: 'From:', place: 'Kunda'},
    {icon: <Favorite/>, key: 'Relationship:', place: 'Single'},
  ]

  return (
    <div className={styles.profileInfo}>
      <h4>User Information</h4>
      <div className={styles.profileInfoItems}>
        {
          profileInfo.map(info => (
            <div key={info.key} className={styles.profileInfoItem}>
              {info.icon}
              <span className={styles.profileInfoKey}>{info.key}</span>
              <span>{info.place}</span>
            </div>
          ))
        }
      </div>
      <button>Change info</button>
    </div>
  );
};

export default ProfileInfo;