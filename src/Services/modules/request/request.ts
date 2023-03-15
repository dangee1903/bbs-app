/* eslint-disable @typescript-eslint/ban-types */
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TRequest, RRequest>({
    query: data => ({
      url: 'xin-phep',
      method: 'POST',
      body: data,
    }),
  })

export type TRequest = {
  data: {}
}

export type RRequest = {
  permission_early: null | number
  permission_type: string
  work_day: string
  permission_status: string
  option_time: string[]
  note: string
}
