import {IUser, IUserData, IUserFromBackEnd, IUserLogin} from '../../interfaces/interfaces';
import {AppDispatch} from '../store';
import {fetchData, userLogin, userLogout} from './authSlice';
import {callApi} from '../../helpers/callApi';
import {toast} from 'react-toastify';
import {fetchPosts, getPosts} from '../postSlice/postSlice';
import {getUserById} from '../userSlice/userSlice';

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
      const res = await callApi.post<IUserFromBackEnd>('/auth/login', user);
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
        dispatch(userLogin(res.data.user));
        dispatch(fetchData(false));
        reset && reset();
      }
    } catch (e) {
      dispatch(fetchData(false));
      e.response.data.errors?.map((err: { msg: string }) => toast.error(err.msg));
      toast.error(e.response.data.message);
    }
  };

  getMyProfile = (userId: string) => async (dispatch: AppDispatch) => {
    try {
      await dispatch(fetchData(true));
      const res = await callApi.get<IUser>(`/auth/getMyProfile/${userId}`);
      if (res.status === 200) {
        dispatch(userLogin(res.data));
        dispatch(fetchData(false));
      }
    } catch (e) {
      dispatch(fetchData(false));
      toast.error(e.response.data.message);
    }
  }

  userLogout = () => async (dispatch: AppDispatch) => {
    try {
      await callApi.post('/auth/logout/');
      dispatch(userLogout(null));
      dispatch(getUserById(null));
      localStorage.removeItem('accessToken');
      dispatch(fetchPosts(false))
      dispatch(getPosts([]));
    } catch (e) {
    }
  };

  refreshToken = (userId: string | undefined) => async (dispatch: AppDispatch) => {
    try {
      const res = await callApi.post<IUserFromBackEnd>('/auth/refresh', {userId: userId});
      if (res.status === 200) {
        localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
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
