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

export const listDayOff = {
  '0': {
    start: '0',
    end: '0',
  },
  '1': {
    start: '1',
    end: '1',
  },
  '2': {
    start: '0',
    end: '1',
  },
}

export enum PERMISSION_TYPE {
  NORMAL = '0',
  LATE = '1',
  EARLY = '2',
  OVERTIME = '4',
}

export enum PERMISSION_STATUS {
  NOT_APPROVED_YET = '0',
  APPROVED = '1',
  REFUSE = '2',
}

export enum SESSION {
  MORNING = '0',
  AFTERNOON = '1',
  ALL = '2',
}

export enum OT_TYPE {
  PROJECT = '1',
  INDIVIDUAL = '2',
}
