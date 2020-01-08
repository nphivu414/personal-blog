import { createSelector } from 'reselect';
import { blogState } from '../../slices/posts/state'

export const getGameDetail = createSelector(
  (state: blogState) => state.blogList.data,
  (data) => data || []
);