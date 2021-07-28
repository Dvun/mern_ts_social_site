import React from 'react';
import styles from './postCenter.module.scss'

interface IPostCenterProps {
  desc?: string
  photo: string
}

const PostCenter: React.FC<IPostCenterProps> = ({desc, photo}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']

  return (
    <div className={styles.postCenter}>
      <div className={styles.postText}>
        <span>{desc}</span>
      </div>
      <img src={PF + photo} alt="post"/>
    </div>
  );
};

export default PostCenter;