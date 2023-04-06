/* eslint-disable react/react-in-jsx-scope */
import { ENUM_COLOR } from '@constants/enum'
import { PERMISSION_TYPE } from '@constants/request'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { TDataShow } from '@model/Request'
import { StyleProp, TextStyle } from 'react-native'

export const ListMenu = [
  {
    label: 'Xin đi muộn',
    icon: (style: StyleProp<TextStyle>, color = ENUM_COLOR.black) => (
      <MaterialIcons style={style} name="work" size={18} color={color} />
    ),
    dataShow: {
      reason: true,
      date: true,
      checkboxTime: true,
      permission_type: PERMISSION_TYPE.LATE,
    } as TDataShow,
  },
  {
    label: 'Xin về sớm',
    icon: (style: StyleProp<TextStyle>, color = ENUM_COLOR.black) => (
      <MaterialIcons style={style} name="work-off" size={18} color={color} />
    ),
    dataShow: {
      reason: true,
      date: true,
      checkboxTime: true,
      permission_type: PERMISSION_TYPE.EARLY,
    } as TDataShow,
  },
  {
    label: 'Xin nghỉ phép',
    icon: (style: StyleProp<TextStyle>, color = ENUM_COLOR.black) => (
      <FontAwesome5
        style={style}
        name="calendar-times"
        size={18}
        color={color}
      />
    ),
    dataShow: {
      reason: true,
      date: true,
      checkBoxSession: true,
      permission_type: PERMISSION_TYPE.NORMAL,
    } as TDataShow,
  },
  {
    label: 'Xin OT',
    icon: (style: StyleProp<TextStyle>, color = ENUM_COLOR.black) => (
      <MaterialIcons style={style} name="more-time" size={18} color={color} />
    ),
    dataShow: {
      reason: true,
      date: true,
      time: true,
      project: true,
      permission_type: PERMISSION_TYPE.OVERTIME,
    } as TDataShow,
  },
]
