import { TSelectString } from '@model/index'

export const listTime: TSelectString[] = [
  { label: '15p', value: '0.25' },
  { label: '30p', value: '0.5' },
  { label: '1h', value: '1' },
  { label: '2h', value: '2' },
]

export const listSession: TSelectString[] = [
  { label: 'Sáng', value: '0' },
  { label: 'Chiều', value: '1' },
  { label: 'Cả ngày', value: '2' },
]

export const listTitle = {
  '0': 'Xin nghỉ phép',
  '1': 'Xin đi muộn',
  '2': 'Xin về sớm',
  '4': 'Xin OT',
}
