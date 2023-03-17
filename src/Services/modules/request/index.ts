import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { api } from '@services/api'
import dayOff from './dayOff'
import request from './request'

export const requestApi = api.injectEndpoints({
  endpoints: (build: EndpointBuilder<any, any, any>) => ({
    request: request(build),
    dayOff: dayOff(build),
  }),
  overrideExisting: true,
})

export const { useRequestMutation, useDayOffMutation } = requestApi
