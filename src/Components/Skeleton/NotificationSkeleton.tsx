/* eslint-disable camelcase */
import commonStyle from '@styles/commonStyle'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'

const NotificationSkeleton = () => {
  return (
    <View style={styles.containerContent}>
      <Placeholder Animation={Fade}>
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
        <PlaceholderLine />
      </Placeholder>
    </View>
  )
}

export default NotificationSkeleton

const styles = StyleSheet.create({
  containerContent: {
    padding: 16,
    ...commonStyle.boxShadow,
  },
})
