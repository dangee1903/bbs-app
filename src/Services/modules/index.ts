import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { api } from '@services/api'
import fetchOne from './fetchOne'

export const userApi = api.injectEndpoints({
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    fetchOne: fetchOne(build),
  }),
  overrideExisting: false,
})

export const { useLazyFetchOneQuery } = userApi
