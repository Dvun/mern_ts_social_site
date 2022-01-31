import React, {useEffect} from 'react';
import styles from './profile.module.scss';
import {CameraAlt} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from '../../store/userSlice/userActions';
import {RootState} from '../../store/store';
import {useHistory, useParams} from 'react-router-dom';
import {getUserById} from '../../store/userSlice/userSlice';
import background from '../../assets/default_background.jpeg'
import defaultPerson from '../../assets/defaultPerson.png'


const Profile: React.FC = () => {
  const history = useHistory();
  const {userName}: any = useParams();
  const dispatch = useDispatch();
  const PF = process.env['REACT_APP_PUBLIC_FOLDER'];
  const {profile, isLoading} = useSelector(({userSlice}: RootState) => userSlice);
  const {user} = useSelector(({authSlice}: RootState) => authSlice);
  const data = new FormData();

  useEffect(() => {
    if (user?.userName === userName) dispatch(getUserById(user));
  }, [dispatch, userName, user]);

  const handleChange = async (e: any) => {
    if (e.target.files.length !== 0) {
      const image = e.target.files[0];
      data.append('fileForDir', e.target.name);
      data.append('userId', profile?._id!);
      data.append('file', image);
    }
    dispatch(UserAction.uploadImage(data));
  };

  return (
    <div className={styles.profile} key={history.location.key}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileCover}>
          <img
            className={styles.backGroundImg}
            src={profile?.coverPicture ? `${PF}${profile?._id}/cover/${profile?.coverPicture}` : background}
            alt="cover"
          />
          <div className={styles.personPic}>
            {
              isLoading ?
                <h2>Loading...</h2>
                :
                <img
                  className={styles.personImg}
                  src={profile?.profilePicture ? `${PF}${profile?._id}/avatar/${profile?.profilePicture}` : defaultPerson}
                  alt="person"
                />
            }
            <div className={styles.changePic} style={user?.userName !== profile?.userName ? {display: 'none'} : {display: 'block'}}>
              <input
                type="file"
                id="changePic"
                name="avatar"
                onChange={(e) => handleChange(e)}
                hidden
                accept="image/*"
              />
              <label htmlFor="changePic"><CameraAlt/></label>
            </div>
          </div>
          <div className={styles.changeBackground} style={user?.userName !== profile?.userName ? {display: 'none'} : {display: 'block'}}>
            <input
              type="file"
              id="changeBackground"
              name="cover"
              hidden
              accept="image/*"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="changeBackground">Change background</label>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h4>{profile?.firstName} {profile?.lastName}</h4>
          <span>Hello my Friends!</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;

