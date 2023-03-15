export type TDataShow = {
  reason?: boolean
  date?: boolean
  time?: boolean
  checkboxTime?: boolean
  checkBoxSession?: boolean
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
