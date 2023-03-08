import { TPostResponse } from '@model/Post/PostType'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<TPostResponse, void>({
    query: () => ({
      url: 'posts',
      method: 'GET',
    }),
  })
