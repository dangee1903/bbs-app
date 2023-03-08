import { api } from '@services/api'
import post from './post'

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getPost: post(build),
  }),
  overrideExisting: true,
})

export const { useGetPostQuery } = postApi
