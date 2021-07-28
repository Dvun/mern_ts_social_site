import React from 'react';
import styles from './feed.module.scss';
import Post from './post/Post';
import Share from './share/Share';
import {Posts} from '../../dummyData';

const Feed: React.FC = () => {

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share/>
        {
          Posts.map(post => (
            <Post key={post.id} post={post}/>
          ))
        }
      </div>
    </div>
  );
};

export default Feed;