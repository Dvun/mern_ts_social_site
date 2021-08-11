import React from 'react';
import styles from './topBarRight.module.scss';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import AuthAction from '../../store/authSlice/authActions';
import {RootState} from '../../store/store';

const TopBarRight: React.FC = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(({authSlice}: RootState) => authSlice);

  return (
    <div className={styles.topBarRight}>
      <ul className={styles.topBarMenu}>
        <li>Timeline</li>
      </ul>
      <ul className={styles.topBarIcons}>
        <li className={styles.topBarIconsItem}>
          <PersonIcon/>
          <span>1</span>
        </li>
        <li className={styles.topBarIconsItem}>
          <MessageIcon/>
          <span>1</span>
        </li>
        <li className={styles.topBarIconsItem}>
          <NotificationsIcon/>
          <span>1</span>
        </li>
      </ul>

      <div className={styles.dropDownContainer}>
          <Link to={`/profile/${user?.userName}`} className={styles.imgAndName}>
            <img src={user?.profilePicture || '/assets/person/defaultPerson.png'} alt="person"/>
            {user?.firstName}
        </Link>

        <DropdownButton
          title=""
        >
          <Dropdown.Item as={Link} to="/">Home Page</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item
            as={Link}
            to='/auth'
            onClick={() => dispatch(AuthAction.userLogout())}
          >Logout
          </Dropdown.Item>
        </DropdownButton>

      </div>
    </div>
  );
};

export default TopBarRight;
