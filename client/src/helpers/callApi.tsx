import axios, {AxiosRequestConfig} from 'axios';
import AuthAction from '../store/authSlice/authActions';
import store from '../store/store';

export const callApi = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true
});

callApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = JSON.parse(localStorage.getItem('accessToken') as string)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


callApi.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {

    console.log(error.response);
    if (!localStorage.getItem('accessToken') || error.response.statusText === 'Not Found') {
      store.dispatch(AuthAction.userLogout());
    }
    if (error.response.statusText === 'Unauthorized') {
      const userId = store.getState().authSlice.user?._id
      store.dispatch(AuthAction.refreshToken(userId));
    }
    return Promise.reject(error);
  },
);
