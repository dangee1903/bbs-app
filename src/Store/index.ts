import {
  configureStore,
  getDefaultMiddleware,
  isRejectedWithValue,
  Middleware,
} from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '@services/api'
import rootReducer from './rootReducer'
import { clear } from './loginReducer'

export type RootState = ReturnType<typeof rootReducer>

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  next =>
  action => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {
      dispatch(clear())
    }

    return next(action)
  }

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  devTools: __DEV__,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(unauthenticatedMiddleware, api.middleware), // NOTE this addition
  reducer: persistedReducer,
})

export type AppDispatch = typeof store.dispatch
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(store)
setupListeners(store.dispatch) // NOTE this addition

export default store
