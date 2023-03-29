import { TUsers } from '@model/Users/UsersType'
import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '@services/modules/users'

type TState = {
  users: TUsers
}

const initState: TState = {
  users: [],
}

const usersReducer = createSlice({
  name: 'login',
  initialState: initState,
  reducers: {
    clear: () => {
      return initState
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.users.matchFulfilled,
      (state, { payload }) => {
        return { users: payload?.users }
      },
    )
  },
})

export const { clear } = usersReducer.actions
export default usersReducer.reducer
