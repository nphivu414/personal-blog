import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './slices/post/postSlices';
import settingReducer from './slices/setting/settingSlices';

const rootReducer = combineReducers({
  post: postReducer,
  setting: settingReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer