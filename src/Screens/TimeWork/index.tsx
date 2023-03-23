import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const TimeWork = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: ENUM_COLOR.white }}
      showsVerticalScrollIndicator={false}
    >
      <Text>TimeWork</Text>
    </ScrollView>
  )
}
export default TimeWork
