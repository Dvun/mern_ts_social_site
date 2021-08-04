import React, {useState} from 'react';
import styles from './authRightSide.module.scss';

interface IAuthRightSideProps {
  handleOpenModal: () => void;
}

const AuthRightSide: React.FC<IAuthRightSideProps> = ({handleOpenModal}) => {

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.loginBox}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input type="email" placeholder="Your Email"/>
          <input type="password" placeholder="Your Password"/>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.loginButton}>Log In</button>
          <span>Forgot Password?</span>
          <button
            type={'button'}
            className={styles.createButton}
            onClick={handleOpenModal}
          >
            Create a new account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthRightSide;
