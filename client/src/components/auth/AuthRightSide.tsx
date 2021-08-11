import React from 'react';
import styles from './authRightSide.module.scss';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {IUserLogin} from '../../interfaces/interfaces';
import {Button, Spinner} from 'react-bootstrap';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '../../validation/validation';
import AuthAction from '../../store/authSlice/authActions';

interface IAuthRightSideProps {
  handleOpenModal: () => void;
}

const AuthRightSide: React.FC<IAuthRightSideProps> = ({handleOpenModal}) => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector(({authSlice}: RootStateOrAny) => authSlice);
  const {handleSubmit, watch, formState: {errors}, register, reset} = useForm({
    resolver: yupResolver(loginSchema)
  });
  const watchFields = watch();

  const onSubmit = (data: IUserLogin) => {
    dispatch(AuthAction.userLogin(data, reset))
  };

  return (
    <div className={styles.loginBox}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          {
            watchFields &&
            <>
              <div>
                <input
                  style={errors.email && {border: '1px solid red'}}
                  type="email"
                  placeholder="Your Email"
                  {...register('email')}
                />
              </div>
              <div>
                <input
                  style={errors.password && {border: '1px solid red'}}
                  type="password"
                  placeholder="Your Password"
                  {...register('password')}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
            </>
          }
        </div>
        <div className={styles.buttonContainer}>

          <Button className={styles.loginButton} variant="primary" disabled={isLoading} type="submit">
            <Spinner
              as="span"
              animation={isLoading && 'border'}
              role="status"
              aria-hidden="true"
            />
            Log In
          </Button>

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
