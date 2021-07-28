import React from 'react';
import styles from './registerModal.module.scss'

interface IRegisterModalProps {
  handleOpenModal: () => void
}

const RegisterModal: React.FC<IRegisterModalProps> = ({handleOpenModal}) => {

  return (
    <>
      <div className={styles.backDrop} onClick={handleOpenModal}/>
      <div className={styles.modalContainer}>
        <h2>Register</h2>
        <div className={styles.inputContainer}>
          <div className={styles.nameSurnameInput}>
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Your Surname'/>
          </div>
          <div className={styles.emailContainer}>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='Your Password'/>
            <input type="password" placeholder='Repeat Password'/>
          </div>
          <button>Register</button>
        </div>
        <span>Have an account?</span>
      </div>
    </>
  );
};

export default RegisterModal;