import {IUserData} from '../../interfaces/interfaces';
import {AppDispatch} from '../store';
import {fetchData} from './authReducer';
import {callApi} from '../../helpers/callApi';
import {toast} from 'react-toastify';


class AuthAction {

  userRegister = (user: IUserData | string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchData(true))
      const res = await callApi.post<any>('/auth/register', user)
      console.log(res);
      dispatch(fetchData(false))
      toast.success(res.data.message)
    } catch (e) {
      toast.warning(e.data)
    }
  }

}


export default new AuthAction()
