import { Post } from './model/postModel'
type blogList = {
  data: Post[],
  error?: string,
}
type blogDetail = {
  data: Post,
  error?: string,
}
export type blogState = {
  loadingStatus: loadingStatus,
  blogList: blogList,
  blogDetail: blogDetail,
}

type loadingStatus = {
  isLoadingBlogList: boolean,
  isLoadingBlogDetail: boolean,
}

export type blogListPayload = {
  data: Post[],
  error?: string,
}

export const initialState: blogState = {
  loadingStatus: {
    isLoadingBlogDetail: false,
    isLoadingBlogList: false,
  },
  blogList: {
    data: []
  },
  blogDetail: {
    data: {
      content: '',
      metadata: {},
      slug: '',
      title: '',
    }
  }
}