import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { blogListPayload, initialState } from './state';

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadBlogList(state, action: PayloadAction<blogListPayload>) {
      state.loadingStatus.isLoadingBlogList = true;
    },
    loadBlogListSuccess(state, action: PayloadAction<blogListPayload>) {
      const { data } = action.payload;
      state.blogList.data = data;
      state.loadingStatus.isLoadingBlogList = false;
    },
    loadBlogListError(state, action: PayloadAction<blogListPayload>) {
      const { error } = action.payload;
      state.blogList.error = error;
      state.loadingStatus.isLoadingBlogList = false;
    },
  }
})

export const {
  loadBlogList,
  loadBlogListSuccess,
  loadBlogListError
} = postSlice.actions

export default postSlice.reducer