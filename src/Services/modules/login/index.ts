import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { api } from '@services/api'
import login from './login'

export const userApi = api.injectEndpoints({
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    login: login(build),
  }),
  overrideExisting: true,
})

export const { useLoginMutation } = userApi
