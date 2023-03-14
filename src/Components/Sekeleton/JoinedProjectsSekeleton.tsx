/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import commontStyle from '@styles/commont.style'
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
    ...commontStyle.boxShadowAll,
  },
  media: {
    width: '100%',
    height: 150,
  },
})
