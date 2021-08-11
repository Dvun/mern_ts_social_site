import {IUserData, IUserLogin, IUserLoginData} from '../../interfaces/interfaces';
import {AppDispatch} from '../store';
import {fetchData, userLogin} from './authSlice';
import {callApi} from '../../helpers/callApi';
import {toast} from 'react-toastify';

class AuthAction {

  userRegister = (user: IUserData, reset: () => void, handleOpenModal: () => void) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData(true));
      const res = await callApi.post<{ message: string }>('/auth/register', user);
      if (res.statusText === 'OK') {
        dispatch(fetchData(false));
        toast.success(res.data.message);
        handleOpenModal();
        reset();
      }
    } catch (e) {
      dispatch(fetchData(false));
      e.response.data.errors?.map((err: { msg: string }) => toast.error(err.msg));
      toast.error(e.response.data.message);
    }
  };

  userLogin = (user: IUserLogin, reset?: () => void) => async (dispatch: AppDispatch) => {
    try {
      await dispatch(fetchData(true));
      const res = await callApi.post<IUserLoginData>('/auth/login', user);
      if (res.statusText === 'OK') {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        const localUser = {
          email: res.data.user.email,
          _id: res.data.user._id
        }
        localStorage.setItem('user', JSON.stringify(localUser));
        dispatch(userLogin(res.data.user))
        dispatch(fetchData(false));
        reset && reset();
      }
    } catch (e) {
      dispatch(fetchData(false));
      e.response.data.errors?.map((err: { msg: string }) => toast.error(err.msg));
      toast.error(e.response.data.message);
    }
  };

  userLogout = () => async (dispatch: AppDispatch) => {
    try {
      const res = await callApi.post('/auth/logout/', {}, {withCredentials: true});
      if (res.statusText === 'OK') {
        dispatch(userLogin(null));
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
      }
    } catch (e) {
    }
  };

  refreshToken = (user: IUserLogin) => async (dispatch: AppDispatch) => {
    try {
      const res = await callApi.post<IUserLoginData>('/auth/refresh', user);
      console.log(res);
      if (res.statusText === 'OK') {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        const localUser = {
          email: res.data.user.email,
          _id: res.data.user._id
        }
        localStorage.setItem('user', JSON.stringify(localUser));
        dispatch(userLogin(res.data.user));
      }
    } catch (e) {
      if (e.response.statusText === 'Unauthorized' || e.response.data.message === 'Token not found!') {
        this.userLogout();
      }
    }
  };

}


export default new AuthAction();
