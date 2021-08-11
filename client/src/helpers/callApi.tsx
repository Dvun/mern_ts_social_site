import axios, {AxiosRequestConfig} from 'axios';
import AuthAction from '../store/authSlice/authActions';
import store from '../store/store';

function getTokenANdUserFromLocalStorage() {
  let accessToken = JSON.parse(localStorage.getItem('accessToken') as string);
  let user = JSON.parse(localStorage.getItem('user') as string);
  return {
    accessToken,
    user,
  };
}

let userData = getTokenANdUserFromLocalStorage();

export const callApi = axios.create({
  baseURL: 'http://localhost:5000/api/',
  withCredentials: true,
  headers: {Authorization: `Bearer ${localStorage.getItem('accessToken')}`}
});

callApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {

    if (config.url === '/auth/login' || config.url === '/auth/register' || config.url === '/auth/logout') {
      config.headers = {'Content-Type': 'application/json'};
    }
    // if (config.url === '/posts' || config.url === '/post') {
    //   const {accessToken} = getTokenANdUserFromLocalStorage();
    //   config.headers = {Authorization: `Bearer ${accessToken}`};
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);


callApi.interceptors.response.use(
  async (config) => {
    return config;
  },
  (error) => {
    if (error.response === undefined || userData.accessToken === undefined  || !userData.accessToken || !userData.user) {
      store.dispatch(AuthAction.userLogout());
    }
    if (error.response.statusText === 'Unauthorized') {
      store.dispatch(AuthAction.refreshToken(userData.user));
    }
    return Promise.reject(error);
  },
);
