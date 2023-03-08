import JoinedProjectsComponent from '@components/JoinedProjectsComponents'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

const Github = () => {
  return (
    <ScrollView style={styles.projectWrap} showsVerticalScrollIndicator={false}>
      <JoinedProjectsComponent />
    </ScrollView>
  )
}
export default Github

const styles = StyleSheet.create({
  projectWrap: {
    padding: 20,
  },
})
