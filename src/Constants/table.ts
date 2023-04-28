import { TListHeader } from '@model/Table/TableType'
import { ENUM_COLOR } from './enum'

export const listTitleHeaderRule: TListHeader = [
  {
    content: 'Nội quy',
    style: {
      borderRightWidth: 1,
      borderColor: ENUM_COLOR.grayBorder,
      flex: 4,
    },
  },
  {
    content: 'Download',
    style: {
      justifyContent: 'flex-end',
      paddingLeft: 15,
    },
  },
]
