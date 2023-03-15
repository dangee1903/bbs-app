import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<any, void>({
    query: () => ({
      url: 'users',
      method: 'GET',
      params: {
        page_size: 1000000000000000000000000000000000000,
      },
    }),
  })
