import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postListPayload, initialState } from './state';

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    loadPostList(state) {
      state.loadingStatus.isLoadingPostList = true;
    },
    loadPostListSuccess(state, action: PayloadAction<postListPayload>) {
      const { data } = action.payload;
      state.postList.data = data;
      state.loadingStatus.isLoadingPostList = false;
    },
    loadPostListError(state, action: PayloadAction<postListPayload>) {
      const { error } = action.payload;
      state.postList.error = error;
      state.loadingStatus.isLoadingPostList = false;
    },
  }
})

export const {
  loadPostList,
  loadPostListSuccess,
  loadPostListError
} = postSlice.actions

export default postSlice.reducer