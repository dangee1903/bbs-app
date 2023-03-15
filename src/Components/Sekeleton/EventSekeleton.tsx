import commonStyle from '@styles/commonStyle'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder'

const EventSekeleton = () => {
  return (
    <View style={styles.containerContent}>
      <Placeholder Animation={Fade}>
        <PlaceholderMedia style={styles.media} />
      </Placeholder>
    </View>
  )
}

export default EventSekeleton

const styles = StyleSheet.create({
  containerContent: {
    ...commonStyle.boxShadowAll,
  },
  media: {
    width: '100%',
    height: 400,
  },
})
