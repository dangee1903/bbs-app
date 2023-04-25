/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'

const TaskSkeleton = () => {
  return (
    <Placeholder Animation={Fade} style={styles.containerContent}>
      <PlaceholderLine />
      <PlaceholderLine />
    </Placeholder>
  )
}

export default TaskSkeleton

const styles = StyleSheet.create({
  containerContent: {
    width: '100%',
  },
})
