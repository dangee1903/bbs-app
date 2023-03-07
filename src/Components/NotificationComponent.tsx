/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NotificationType } from '@model/NotificationType'
import commontStyle from '@styles/commont.style'

const NotificatioComponent = (props: NotificationType) => {
  // eslint-disable-next-line camelcase
  const { name, introduction, created_at } = props
  return (
    <View style={styles.containerContent}>
      <View>
        <Text style={styles.contentTitle} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.contentText} numberOfLines={2}>
          {introduction}
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>{created_at}</Text>
          <Text style={styles.bottomBtn} onPress={() => 'go to detail'}>
            Detail
          </Text>
        </View>
      </View>
    </View>
  )
}

export default NotificatioComponent

const styles = StyleSheet.create({
  containerContent: {
    padding: 16,
    ...commontStyle.boxShadow,
  },
  contentTitle: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: 6,
    letterSpacing: 0.15,
    textTransform: 'uppercase',
  },
  contentText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 15,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  bottomText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#6D6D6D',
  },
  bottomBtn: {
    ...commontStyle.btn,
    color: '#6200EE',
  },
})
