/* eslint-disable camelcase */
import commonStyle from '@styles/commonStyle'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Placeholder, Fade, PlaceholderMedia } from 'rn-placeholder'

const JoinedProjectsSekeleton = () => {
  return (
    <View style={styles.containerContent}>
      <Placeholder Animation={Fade}>
        <PlaceholderMedia style={styles.media} />
      </Placeholder>
    </View>
  )
}

export default JoinedProjectsSekeleton

const styles = StyleSheet.create({
  containerContent: {
    ...commonStyle.boxShadowAll,
  },
  media: {
    width: '100%',
    height: 150,
  },
})
