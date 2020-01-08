import { combineReducers } from '@reduxjs/toolkit'
import postReducer from './slices/posts/postSlices';

const rootReducer = combineReducers({
  post: postReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer