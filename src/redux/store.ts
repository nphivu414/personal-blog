import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
const store = configureStore({
  reducer: rootReducer
})
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer.ts', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}
export type AppDispatch = typeof store.dispatch
export default store