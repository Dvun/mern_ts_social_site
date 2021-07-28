import React from 'react';
import styles from './authRightSide.module.scss';

interface IAuthRightSideProps {
  handleOpenModal: () => void
}

const AuthRightSide: React.FC<IAuthRightSideProps> = ({handleOpenModal}) => {

  return (
    <div className={styles.loginBox}>
      <div className={styles.inputContainer}>
        <input type="email" placeholder="Your Email"/>
        <input type="password" placeholder="Your Password"/>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.loginButton}>Log In</button>
        <span>Forgot Password?</span>
        <button className={styles.createButton} onClick={handleOpenModal}>Create a new account</button>
      </div>
    </div>
  );
};

export default AuthRightSide;