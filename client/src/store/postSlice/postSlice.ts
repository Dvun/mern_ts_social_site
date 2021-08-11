import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPostState} from './interfaces';
import {IPost} from '../../interfaces/interfaces';

const initialState: IPostState = {
  posts: [],
  post: null,
  error: null,
  isLoading: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {

    getAllPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },

    fetchData(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

  },
});

export default postSlice.reducer;
export const {
  getAllPosts,
  fetchData,
} = postSlice.actions;
