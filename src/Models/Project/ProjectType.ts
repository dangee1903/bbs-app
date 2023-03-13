export type TCurrentMembers = {
  id: number
  project_id: number
  user_id: number
  note: null | number
  mission: number
  contract: null | number
  reality: null | number
  time_start: null | number
  time_end: null | number
}

export type TProject = {
  id: number
  name: string
  customer: string
  project_type: number
  leader_id: number
  start_date: string
  end_date: null | string
  status: number
  userInfo: {
    off: []
    asking: []
  }
  current_members: [TCurrentMembers]
  tasks?: []
}

export type TTask = {
  id: number
  project_id: number
  user_id: number
  creator_id: number
  updator_id: number
  status: number
  task_id: string
  deadline: null | string
  progress: number
  content: null | string
  issue: string
  created_at: string
  updated_at: string
}

export type TProjects = {
  test: number[]
}
