import React from 'react';
import styles from './postTop.module.scss';
import {MoreVert} from '@material-ui/icons';
import {IPost} from '../../../interfaces/interfaces';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import UserAction from '../../../store/userSlice/userActions'

interface IPostTopProps {
  post: IPost;
}

const PostTop: React.FC<IPostTopProps> = ({post}) => {
  const dispatch = useDispatch()
  const PF = process.env['REACT_APP_PUBLIC_FOLDER'];

  return (
    <div className={styles.postTop}>
      <Link
        className={styles.postTopLeft} to={`/profile/${post.userId.userName}`}
        onClick={() => dispatch(UserAction.getUserProfile(post.userId._id))}
      >
        <div>
          <img
            src={post.userId?.profilePicture ? `${PF}${post.userId?._id}/avatar/${post.userId?.profilePicture}` : '/assets/person/defaultPerson.png'}
            alt="person"
          />
          <div className={styles.nameAndTime}>
            <span className={styles.name}>{`${post.userId.firstName} ${post.userId.lastName}`}</span>
            <span className={styles.time}>{format(post.createdAt)}</span>
          </div>
        </div>
      </Link>
      <div className={styles.postTopRight}>
        <MoreVert/>
      </div>
    </div>
  );
};

export default PostTop;
