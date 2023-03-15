/* eslint-disable camelcase */
import { converDate } from '@helpers/datatime'
import { TEventType } from '@model/Event/EventType'
import commonStyle from '@styles/commonStyle'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type TProps = {
  data: TEventType
  onPress: (route: string, id: number, type: string, name: string) => void
}

const EventComponent = ({ data, onPress }: TProps) => {
  const TYPE = 'Event'
  const { name, created_at: createdAt, introduction, id } = data
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
          <Text style={styles.contentTopDate}>{converDate(createdAt)}</Text>
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
        <Text
          style={styles.bottomBtn}
          onPress={() => onPress('Details', id, TYPE, name)}
        >
          View
        </Text>
        <Text style={styles.bottomBtn}>Join</Text>
      </View>
    </View>
  )
}

export default EventComponent

const styles = StyleSheet.create({
  containerContent: {
    ...commonStyle.boxShadowAll,
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
    flex: 1,
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
    ...commonStyle.btn,
    marginLeft: 25,
  },
})
