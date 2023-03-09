export interface DataType {
  post: TDetailPostType
}

export interface TDetailPostType {
  id: number
  creator_id: number
  name: string
  slug_name: string
  tags: string
  author_name?: string
  image_url: string
  introduction: string
  content: string
  view_count: number
  status: number
  has_notify: boolean
  notify_date: string
  created_at: string
  is_sent: number
  created_time: string
}
