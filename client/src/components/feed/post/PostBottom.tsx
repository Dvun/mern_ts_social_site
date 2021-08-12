import React, {useState} from 'react';
import styles from './postBottom.module.scss'

interface IPostBottomProps {
  likes: string[]
  comment: number
}

const PostBottom: React.FC<IPostBottomProps> = ({likes, comment}) => {
  const PF = process.env['REACT_APP_PUBLIC_FOLDER']
  const [likesLength, setLikesLength] = useState<number>(likes.length)
  const [liked, setLiked] = useState<boolean>(false)

  const handleLike = () => {
    setLiked(prevState => !prevState)
    setLikesLength(liked ? prevState => prevState - 1 : prevState => prevState + 1)
  }

  return (
    <div className={styles.postBottom}>
      <div className={styles.postBottomLeft}>
        <img src={PF + 'like.png'} alt="like" onClick={handleLike}/>
        <img src={PF + 'heart.png'} alt="heart" onClick={handleLike}/>
        <span className={styles.likeCounter}>{likesLength} people like it</span>
      </div>
      <div className={styles.postBottomRight}>
        <span>{comment} comments</span>
      </div>
    </div>
  );
};

export default PostBottom;
