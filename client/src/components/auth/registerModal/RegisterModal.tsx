import React from 'react';
import styles from './registerModal.module.scss';
import {IUserData} from '../../../interfaces/interfaces';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registerSchema} from '../../../validation/validation';
import {useDispatch, useSelector} from 'react-redux';
import AuthAction from '../../../store/authSlice/authActions';
import {Button, Spinner} from 'react-bootstrap';
import {RootState} from '../../../store/store';

interface IRegisterModalProps {
  handleOpenModal: () => void;
}

const RegisterModal: React.FC<IRegisterModalProps> = ({handleOpenModal}) => {
  const dispatch = useDispatch();
  const {isLoading, user} = useSelector(({authSlice}: RootState) => authSlice);
  const accessToken = localStorage.getItem('accessToken')
  const {handleSubmit, register, watch, formState: {errors}, reset} = useForm<IUserData>({
    resolver: yupResolver(registerSchema),
  });
  const watchFields = watch();

  const onSubmit = (data: IUserData) => {
    if (data.password !== data.repeatPassword) {
      return;
    }
    dispatch(AuthAction.userRegister(data, reset, handleOpenModal));
  };

  return (
    <>
      <div className={styles.backDrop} onClick={handleOpenModal}/>
      <div className={styles.modalContainer}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            watchFields &&
            <div className={styles.inputContainer}>
              <div className={styles.nameSurnameInput}>

                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    style={errors.firstName && {border: '1px solid red'}}
                    {...register('firstName', {required: true})}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Your Surname"
                    style={errors.lastName && {border: '1px solid red'}}
                    {...register('lastName', {required: true})}
                  />
                </div>

              </div>

              <div className={styles.emailContainer}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Username"
                    style={errors.email && {border: '1px solid red'}}
                    {...register('userName', {required: true})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    style={errors.email && {border: '1px solid red'}}
                    {...register('email', {required: true})}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Your Password"
                    style={errors.password && {border: '1px solid red'}}
                    {...register('password', {required: true})}
                  />
                </div>
                <div className={styles.passwordRepeat}>
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    style={errors.repeatPassword && {border: '1px solid red'}}
                    {...register('repeatPassword', {required: true})}
                  />
                  {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
                </div>
              </div>

              <Button variant="primary" disabled={!user && isLoading && !accessToken } type="submit" className={styles.loginButton}>
                {
                  !user && isLoading && !accessToken &&
                  <Spinner
                    as='span'
                    animation={'border'}
                    role="status"
                    aria-hidden="true"
                  />
                }
                Register
              </Button>

            </div>
          }
        </form>
        <span>Have an account?</span>
      </div>
    </>
  );
};

export default RegisterModal;
