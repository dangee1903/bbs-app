export interface DataType {
  event: TDetailEventType
}

export interface TDetailEventType {
  id: number
  name: string
  slug_name: string
  image_url: string
  event_date: string
  event_end_date: string
  place: string
  introduction: string
  content: string
  view_count: number
  status: number
  has_notify: number
  user_levels: any
  notify_date: string
  created_at: string
  is_sent: any
  deadline_at: string
  users: User[]
  author_name?: string
}

export interface User {
  user_id: number
  staff_code: string
  name: string
  content: any
  status: number
  created_at: string
}
