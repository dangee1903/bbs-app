import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<any, void>({
    query: () => ({
      url: 'events',
      method: 'GET',
    }),
  })
