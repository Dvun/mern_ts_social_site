import {AppDispatch} from '../store';
import {toast} from 'react-toastify';
import {fetchPosts, getPosts} from './postSlice';
import {callApi} from '../../helpers/callApi';
import {IPost} from '../../interfaces/interfaces';


class PostAction {

  getAllPosts = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchPosts(true));
      const res = await callApi.get<IPost[]>('/posts');
      if (res.status === 200) {
        dispatch(getPosts(res.data));
        dispatch(fetchPosts(false));
      }
    } catch (e) {
      dispatch(fetchPosts(false));
    }
  };

}


export default new PostAction();
