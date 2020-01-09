import { Post } from './model/postModel'
type postList = {
  data: Post[],
  error?: string,
}
type postDetail = {
  data: Post,
  error?: string,
}
export type blogState = {
  loadingStatus: loadingStatus,
  postList: postList,
  postDetail: postDetail,
}

type loadingStatus = {
  isLoadingPostList: boolean,
  isLoadingPostDetail: boolean,
}

export type postListPayload = {
  data: Post[],
  error?: string,
}

export const initialState: blogState = {
  loadingStatus: {
    isLoadingPostDetail: false,
    isLoadingPostList: false,
  },
  postList: {
    data: []
  },
  postDetail: {
    data: {
      content: '',
      metadata: {},
      slug: '',
      title: '',
    }
  }
}