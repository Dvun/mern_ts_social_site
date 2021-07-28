import React from 'react';
import styles from './post.module.scss'
import PostTop from './PostTop';
import PostCenter from './PostCenter';
import PostBottom from './PostBottom';
import {IPost, IUser} from '../../../interfaces/interfaces';
import {Users} from '../../../dummyData';

interface IPostProps {
  post: IPost
}

const Post: React.FC<IPostProps> = ({post}) => {

  const user: IUser = Users.filter(user => user.id === post.userId)[0]

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <PostTop date={post.date} user={user}/>
        <PostCenter desc={post.desc} photo={post.photo}/>
        <PostBottom comment={post.comment} like={post.like}/>
      </div>
    </div>
  );
};

export default Post;