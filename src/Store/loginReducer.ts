import { createSlice } from '@reduxjs/toolkit'
import { userApi } from '@services/modules/login'
import { TUser } from '@services/modules/login/login'

const initUser: TUser = {
  data: {
    id: 0,
    name: '',
    email: '',
    avatar: '',
    phone: '',
    birthday: '',
    team: {
      id: 0,
      name: '',
      leader_id: 0,
      banner: '',
      color: '',
      description: '',
      slogan: '',
      group_id: 0,
    },
    group: {},
    job_name: '',
  },
  meta: {
    token: '',
  },
}

const initState = {
  login: false,
  user: initUser,
}

const loginReducer = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    save: (state: typeof initState) => {
      return { ...state }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        return { login: true, user: { ...payload } }
      },
    )
  },
})

export const { save } = loginReducer.actions
export default loginReducer.reducer
