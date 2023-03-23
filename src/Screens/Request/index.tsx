import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Request = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: ENUM_COLOR.white }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Request</Text>
    </ScrollView>
  )
}
export default Request
