import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Notification = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: ENUM_COLOR.white }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Helllo Notification</Text>
    </ScrollView>
  )
}
export default Notification
