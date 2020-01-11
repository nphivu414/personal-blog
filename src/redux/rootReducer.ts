import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './slices/post/postSlices';
import settingReducer from './slices/setting/settingSlices';
import projectReducer from './slices/project/projectSlices';

const rootReducer = combineReducers({
  post: postReducer,
  setting: settingReducer,
  project: projectReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer