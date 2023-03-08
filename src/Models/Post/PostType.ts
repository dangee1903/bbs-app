import { Meta } from '@model/PaginationType'

export interface TPostResponse {
  message: string
  code: number
  data: Data
}

export interface Data {
  meta: Meta
  posts: TPostType[]
}

export interface TPostType {
  id: number
  name: string
  slug_name?: string
  tags?: any
  introduction: string
  created_at: string
  created_time?: string
}
