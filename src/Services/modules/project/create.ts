import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<any, TTaskState>({
    query: (data: TTaskState) => ({
      url: `projects/${data.pjId}/tasks`,
      method: 'POST',
      body: data,
    }),
    invalidatesTags: (result, error, body) => {
      return [{ type: 'Test' as const, id: result?.data?.project_id }]
    },
  })

type TTaskState = {
  pjId: number
  task_id?: string
  issue?: string
}
