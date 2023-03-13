import { api } from '@services/api'
import event from './event'
import getDetailEvent from './getDetailEvent'

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getEvent: event(build),
    getDetailEvent: getDetailEvent(build),
  }),
  overrideExisting: true,
})

export const { useGetEventQuery, useGetDetailEventMutation } = postApi
