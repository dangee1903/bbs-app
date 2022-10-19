import { combineReducers } from '@reduxjs/toolkit'
import createReducer from './createReducer'

const rootReducer = combineReducers({
  counter: createReducer,
})

export default rootReducer
