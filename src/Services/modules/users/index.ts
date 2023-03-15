import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { api } from '@services/api'
import users from './users'

export const userApi = api.injectEndpoints({
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    users: users(build),
  }),
  overrideExisting: true,
})

export const { useUsersMutation } = userApi
