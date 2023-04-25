import { TUsers } from '@model/Users/UsersType'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TListUser, RListUser>({
    query: () => ({
      url: 'users',
      method: 'GET',
      params: {
        page_size: 1000000000000000000000000000000000000,
      },
    }),
  })

export type RListUser = {
  start_date?: string
  end_date?: string
}

export type TListUser = {
  data: {
    meta: TMeta
    users: TUsers
  }
}

export type TMeta = {
  pagination: {
    total: number
    count: number
    per_page: number
    current_page: number
    total_page: number
    link: []
  }
}
