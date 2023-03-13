import { combineReducers } from '@reduxjs/toolkit'
import { api } from '@services/api'
import createReducer from './createReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  counter: createReducer,
  login: loginReducer,
  api: api.reducer,
})

export default rootReducer
