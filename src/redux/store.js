import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import blogReducer from './blogSlice'
import authUserReducer from './authUserSlice'
import blogDetailReducer from './blogDetailSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({ auth: authReducer, blog: blogReducer, authUser: authUserReducer, blogDetail: blogDetailReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export let persistor = persistStore(store)