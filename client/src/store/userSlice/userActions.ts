import {AppDispatch} from '../store';
import {callApi} from '../../helpers/callApi';
import {fetchUserAndData, getUserById} from './userSlice';
import {IUser} from '../../interfaces/interfaces';
import {toast} from 'react-toastify';
import { userLogin } from '../authSlice/authSlice';


class UserAction {

  getUserProfile = (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchUserAndData(true));
      const res = await callApi.get<IUser>(`/profile/${userId}`);
      dispatch(getUserById(res.data));
      dispatch(fetchUserAndData(false));
    } catch (e) {
      toast.error(e.response.message);
    }
  };

  uploadImage = (file: any) => async (dispatch: AppDispatch) => {
    const config = {headers: {'Content-Type': 'multipart/form-data'}};
    try {
      dispatch(fetchUserAndData(true));
      const res = await callApi.post('/upload', file, config);
      if (res.status === 200) {
        console.log(res.data);
        dispatch(userLogin(res.data.user))
        dispatch(fetchUserAndData(true));
        toast.success(res.data.message)
      }
    } catch (e) {
      console.log(e.response.message);
    }
  };


}


export default new UserAction();
