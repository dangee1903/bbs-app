import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<any, number | undefined>({
    query: (id: number) => ({
      url: `projects/${id}/overview`,
      method: 'GET',
      skipToken: true,
    }),
    providesTags(result: any) {
      const final = [{ type: 'Test' as const, id: result?.data?.project.id }]
      return final
    },
  })
