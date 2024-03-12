import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// Reducer imports
import { systemReducer } from '@models/redux/system/system.slice'

// ### Reducer
const combinedReducers = combineReducers({
  system: systemReducer,
})

// ### Store
export default configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({ thunk: false, serializableCheck: false })
    return [
      ...defaultMiddleware,
    ]
  }
})