import {IAccessToken, IUserData, IUserLogin} from '../../interfaces/interfaces';
import {AppDispatch} from '../store';
import {fetchData, userLogin, userLogout} from './authSlice';
import {callApi} from '../../helpers/callApi';
import {toast} from 'react-toastify';
import {decodeToken} from '../../helpers/decodeToken';
import {fetchPosts, getPosts} from '../postSlice/postSlice';

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
      const res = await callApi.post<IAccessToken>('/auth/login', user);
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        const userData = await decodeToken(res.data.accessToken);
        dispatch(userLogin(userData));
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
      await callApi.post('/auth/logout/');
      dispatch(userLogout(null));
      localStorage.removeItem('accessToken');
      dispatch(fetchPosts(false))
      dispatch(getPosts([]));
    } catch (e) {
    }
  };

  refreshToken = (userId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const res = await callApi.post<IAccessToken>('/auth/refresh', {userId: userId});
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        const userData = await decodeToken(res.data.accessToken);
        dispatch(userLogin(userData));
      }
    } catch (e) {
      if (e.response.statusText === 'Unauthorized' || e.response.data.message === 'Token not found!') {
        this.userLogout();
      }
    }
  };

}


export default new AuthAction();
