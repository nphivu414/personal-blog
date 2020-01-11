import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { projectListPayload, initialState } from './state';

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    loadProjectList(state) {
      state.loadingStatus.isLoadingProjectList = true;
    },
    loadProjectListSuccess(state, action: PayloadAction<projectListPayload>) {
      const { data } = action.payload;
      state.projectList.data = data;
      state.loadingStatus.isLoadingProjectList = false;
    },
    loadProjectListError(state, action: PayloadAction<projectListPayload>) {
      const { error } = action.payload;
      state.projectList.error = error;
      state.loadingStatus.isLoadingProjectList = false;
    },
  }
})

export const {
  loadProjectList,
  loadProjectListSuccess,
  loadProjectListError
} = projectSlice.actions

export default projectSlice.reducer