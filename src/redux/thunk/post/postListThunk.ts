import { loadPostList, loadPostListSuccess, loadPostListError } from 'src/redux/slices/post/postSlices';
import { loadPostListService } from 'src/service/postService';

export function loadPostListAction(options) {
  return async dispatch => {
    dispatch(loadPostList());
    try {
      const response = await loadPostListService();
      dispatch(loadPostListSuccess({
        data: response.data.objects
      }));
    } catch (error) {
      dispatch(loadPostListError(error.message));
    }
  };
}