/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'

const TaskSekeleton = () => {
  return (
    <Placeholder Animation={Fade} style={styles.containerContent}>
      <PlaceholderLine />
    </Placeholder>
  )
}

export default TaskSekeleton

const styles = StyleSheet.create({
  containerContent: {
    width: '100%',
  },
})
