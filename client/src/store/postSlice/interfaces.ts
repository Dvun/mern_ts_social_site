import {IPost} from '../../interfaces/interfaces';

export interface IPostState {
  posts: IPost[] | []
  post: IPost | null
  error: string | null
  isLoading: boolean
  profilePicture?: string
}
