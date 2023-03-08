import { api } from '@services/api'
import event from './event'

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getEvent: event(build),
  }),
  overrideExisting: true,
})

export const { useGetEventQuery } = postApi
