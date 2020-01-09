import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

export const getPostList = createSelector(
  (state: RootState) => state.post.postList,
  (postList) => postList.data || []
);