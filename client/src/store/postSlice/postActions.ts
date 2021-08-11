import {AppDispatch} from '../store';
import {toast} from 'react-toastify';
import {fetchData, getAllPosts} from './postSlice';
import {callApi} from '../../helpers/callApi';
import { IPost } from '../../interfaces/interfaces';





class PostAction {

  getAllPosts = () => async (dispatch: AppDispatch) => {
    try {
      await dispatch(fetchData(true));
      const res = await callApi.get<IPost[]>('/posts');
      dispatch(getAllPosts(res.data));
      dispatch(fetchData(false));
    } catch (e) {

    }
  };

}


export default new PostAction();
