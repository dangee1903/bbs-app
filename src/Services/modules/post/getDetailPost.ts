import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<any, { id: number }>({
    query: id => {
      return {
        url: `posts/${id}`,
        method: 'GET',
      }
    },
  })
