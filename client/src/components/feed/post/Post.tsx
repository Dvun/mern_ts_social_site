import React from 'react';
import styles from './post.module.scss'
import PostTop from './PostTop';
import PostCenter from './PostCenter';
import PostBottom from './PostBottom';
import {IPost} from '../../../interfaces/interfaces';

interface IPostProps {
  post: IPost
}

const Post: React.FC<IPostProps> = ({post}) => {

  return (
    <div className={styles.post}>
      <div className={styles.postWrapper}>
        <PostTop post={post}/>
        <PostCenter desc={post.desc} photo={post.photo}/>
        <PostBottom comment={post.comment} likes={post.likes}/>
      </div>
    </div>
  );
};

export default Post;
