import { ViewStyle, StyleProp } from 'react-native'

export type TListHeader = {
  content: string
  style?: StyleProp<ViewStyle>
}[]
export type TListColumn = {
  content: string | React.ReactNode
  style?: StyleProp<ViewStyle>
}[]
