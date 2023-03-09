import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const Notification = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >
      <Text>Helllo Notification</Text>
    </ScrollView>
  )
}
export default Notification

const styles = StyleSheet.create({})
