export type TUsers = TUser[]

export type TUser = {
  id: number
  staff_code: string
  name: string
  phone: string
  email: string
  avatar: string
  id_card: string
  id_addr?: null
  address?: null
  current_address: string
  school: string
  birthday: string
  probation_at?: null
  start_date: string
  end_date?: null
  contract_type: number
  status: number
  jobtitle_id: number
  position_id: number
  gmail: string
  gitlab?: null
  chatwork?: null
  skills?: null
  in_future?: null
  hobby?: null
  foreign_language?: null
  sex: number
  is_remote: number
  last_activity_at: string
  is_remote_checkin: number
  official_contract_date?: null
  is_remote_checkin_vpn: number
  team_name: string
  group_name: string
  job_name: string
}
