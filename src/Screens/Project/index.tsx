import { ENUM_COLOR } from '@constants/enum'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Project = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: ENUM_COLOR.white }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Project</Text>
    </ScrollView>
  )
}
export default Project
