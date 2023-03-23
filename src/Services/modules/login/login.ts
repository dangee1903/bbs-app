import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<TUser, RUser>({
    query: data => ({
      url: 'login',
      method: 'POST',
      body: data,
    }),
  })

export type TUser = {
  data: {
    id: number
    name: string
    email: string
    avatar: string
    phone: string
    birthday: string
    team: {
      id: number
      name: string
      leader_id: number
      banner: string
      color: string
      description: string
      slogan: string
      group_id: number
    }
    group: object
    job_name: string
  }
  meta: {
    token: string
  }
}

export type RUser = {
  email: string
  password: string
  remember_mew: boolean
}
