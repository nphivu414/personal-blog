import { createSelector } from 'reselect';
import { RootState } from 'src/redux/rootReducer';

export const getProjectList = createSelector(
  (state: RootState) => state.project.projectList,
  projectList => projectList.data || []
);