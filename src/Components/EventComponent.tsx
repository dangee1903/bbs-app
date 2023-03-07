/* eslint-disable camelcase */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EventType } from '@model/EventType'
import commontStyle from '@styles/commont.style'

const EventComponent = (props: EventType) => {
  const { name, created_at, introduction } = props
  return (
    <View style={styles.containerContent}>
      <View style={styles.contentTop}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/logo-og.png',
          }}
        />
        <View style={styles.title}>
          <Text style={styles.contentTopTitle} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.contentTopDate}>{created_at}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.contentImage}
          source={{
            uri: 'https://reactnative.dev/img/logo-og.png',
          }}
        />
        <Text style={styles.contentText} numberOfLines={2}>
          {introduction}
        </Text>
      </View>
      <View style={styles.contentBottom}>
        <Text style={styles.bottomBtn}>View</Text>
        <Text style={styles.bottomBtn}>Join</Text>
      </View>
    </View>
  )
}

export default EventComponent

const styles = StyleSheet.create({
  containerContent: {
    ...commontStyle.boxShadowAll,
  },
  contentTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginBottom: 6,
    marginTop: 14,
    flexWrap: 'nowrap',
  },
  logo: {
    width: 40,
    height: 36,
    borderRadius: 100,
  },
  title: {
    marginLeft: 16,
  },
  contentTopTitle: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 0.87)',
    letterSpacing: 0.15,
    textTransform: 'uppercase',
  },
  contentTopDate: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  content: {
    marginBottom: 10,
  },
  contentImage: {
    width: '100%',
    height: 174,
    marginBottom: 20,
  },
  contentText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 15,
    paddingHorizontal: 14,
  },
  contentBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 24,
    marginBottom: 18,
  },
  bottomBtn: {
    ...commontStyle.btn,
    marginLeft: 25,
  },
})
