import {AppDispatch} from '../store';
import {callApi} from '../../helpers/callApi';
import {fetchData, getMyProfile} from './userSlice';
import {IUser} from '../../interfaces/interfaces';
import {userLogin} from '../authSlice/authSlice';


class UserAction {

  getMyProfile = (userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData(true))
      const res = await callApi.get<IUser>(`/myProfile/${userId}`)
      dispatch(getMyProfile(res.data))
      dispatch(userLogin(res.data))
      dispatch(fetchData(false))
    } catch (e) {

    }
  }


}


export default new UserAction();
