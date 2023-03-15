import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { Config } from '@constants/config'
import { getToken } from '@helpers/token'
import Toast from 'react-native-toast-message'

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prepareHeaders: async (headers, { getState }) => {
    const token = await getToken()

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)
  if (result.error) {
    const error = result.error as any
    Toast.show({
      type: 'error',
      text1: `Lỗi ${error?.data?.status}`,
      text2: error?.data?.message ?? '',
    })
  }
  return result
}

export const api = createApi({
  keepUnusedDataFor: 0.00001,
  tagTypes: ['Test'],
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
})
