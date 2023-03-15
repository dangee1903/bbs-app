import { combineReducers } from '@reduxjs/toolkit'
import { api } from '@services/api'
import createReducer from './createReducer'
import loginReducer from './loginReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  counter: createReducer,
  login: loginReducer,
  users: usersReducer,
  api: api.reducer,
})

export default rootReducer
