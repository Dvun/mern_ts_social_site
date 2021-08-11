import React, {useEffect} from 'react';
import styles from './feed.module.scss';
import Post from './post/Post';
import Share from './share/Share';
import {useDispatch, useSelector} from 'react-redux';
import {IPost} from '../../interfaces/interfaces';
import PostAction from '../../store/postSlice/postActions';
import {RootState} from '../../store/store';

const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const {posts, isLoading: isLoadingPosts} = useSelector(({postSlice}: RootState) => postSlice);
  const {isAuth, isLoading} = useSelector(({authSlice}: RootState) => authSlice);

  useEffect(() => {
    if (isAuth && !isLoading) {
      dispatch(PostAction.getAllPosts());
    }
  }, [dispatch, isAuth, isLoading]);

  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <Share/>
        {
          isLoadingPosts ?
            <h2 style={{textAlign: 'center', marginTop: '50px'}}>Loading...</h2>
            :
            posts.map((post: IPost) => (
              <Post key={post._id} post={post}/>
            ))
        }
      </div>
    </div>
  );
};

export default Feed;
