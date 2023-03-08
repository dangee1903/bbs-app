import { api } from '@services/api'
import getpost from './getPost'
import getDetailPost from './getDetailPost'

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getPost: getpost(build),
    getDetailPost: getDetailPost(build),
  }),
  overrideExisting: true,
})

export const { useGetPostQuery, useGetDetailPostMutation } = postApi
