/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import commontStyle from '@styles/commont.style'
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder'

const NotificationSekeleton = () => {
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

export default NotificationSekeleton

const styles = StyleSheet.create({
  containerContent: {
    padding: 16,
    ...commontStyle.boxShadow,
  },
})
