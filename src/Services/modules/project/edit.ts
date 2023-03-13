import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.mutation<any, TTaskState>({
    query: (data: TTaskState) => ({
      url: `projects/${data.pjId}/tasks/${data.id}`,
      method: 'PUT',
      body: data,
    }),
    invalidatesTags: (result, error, body) => {
      return [{ type: 'Test' as const, id: result?.data?.project_id }]
    },
  })

type TTaskState = {
  id: number
  pjId: number
  task_id: string
  issue?: string
  progress?: number
  deadline?: string
}
