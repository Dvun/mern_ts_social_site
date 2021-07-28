import React, { useState } from 'react';
import styles from './authPage.module.scss';
import AuthRightSide from '../../components/auth/AuthRightSide';
import RegisterModal from '../../components/auth/registerModal/RegisterModal';

const AuthPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleOpenModal = () => {
    setOpenModal(prevState => !prevState)
  }

  return (
    <>
      <div className={styles.authPage}>
        <div className={styles.authWrapper}>
          <div className={styles.authLeftSide}>
            <h1>SOCIAL MEDIA</h1>
            <span>Connect with friends and the world around you on SOCIAL MEDIA.</span>
          </div>
          <div className={styles.authRightSide}>
            <AuthRightSide handleOpenModal={handleOpenModal}/>
          </div>
        </div>
      </div>
      {
        openModal && <RegisterModal handleOpenModal={handleOpenModal}/>
      }
    </>
  );
};

export default AuthPage;