import { api } from '@services/api'
import create from './create'
import edit from './edit'
import joined from './joined'
import ovewiew from './ovewiew'
import remove from './remove'

export const projectApi = api.injectEndpoints({
  endpoints: build => ({
    joined: joined(build),
    ovewiew: ovewiew(build),
    create: create(build),
    edit: edit(build),
    remove: remove(build),
  }),
  overrideExisting: true,
})

export const {
  useJoinedQuery,
  useOvewiewQuery,
  useCreateMutation,
  useEditMutation,
  useRemoveMutation,
} = projectApi
