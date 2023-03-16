/* eslint-disable @typescript-eslint/no-explicit-any */
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TDayOff, RDayOff>({
    query: data => ({
      url: 'ngay-phep',
      method: 'POST',
      body: data,
    }),
  })

export type TDayOff = {
  data: {
    success: boolean
  }
}

export type RDayOff = {
  id_hid?: null | number
  reason: string
  start_at: string
  start: string
  end_at: string
  end: string
  approver_id: string
}
