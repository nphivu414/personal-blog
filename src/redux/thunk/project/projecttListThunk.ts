import { loadProjectList, loadProjectListSuccess, loadProjectListError } from 'src/redux/slices/project/projectSlices';
import { loadProjectListService } from 'src/service/projectService';

export function loadProjectListAction(options) {
  return async dispatch => {
    dispatch(loadProjectList());
    try {
      const response = await loadProjectListService();
      dispatch(loadProjectListSuccess({
        data: response.data.objects
      }));
    } catch (error) {
      dispatch(loadProjectListError(error.message));
    }
  };
}