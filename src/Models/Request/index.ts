export type TDataShow = {
  reason?: boolean
  date?: boolean
  time?: boolean
  checkboxTime?: boolean
  checkBoxSession?: boolean
  project?: boolean
  permission_type: string
}

export type TDataRequest = {
  permission_early?: null | number
  permission_type?: string
  work_day: string
  permission_status?: string
  option_time: string[]
  note: string
}

export type TRequestState = {
  note: string
  work_day: string
  option_time: string[]
  project: string
  session: string
  start_at?: string
  end_at?: string
}
