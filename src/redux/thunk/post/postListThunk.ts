import { loadBlogList, loadBlogListSuccess, loadBlogListError } from 'src/redux/slices/posts/postSlices';
import { loadPostListService } from 'src/service/postService';

export function loadPostList(options) {
  return async dispatch => {
    dispatch(loadBlogList());
    try {
      const response = await loadPostListService();
      dispatch(loadBlogListSuccess({
        data: response.data.objects
      }));
    } catch (error) {
      dispatch(loadBlogListError(error.message));
    }
  };
}