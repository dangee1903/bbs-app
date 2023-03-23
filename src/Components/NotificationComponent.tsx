/* eslint-disable camelcase */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TPostType } from '@model/Post/PostType'
import { converDate } from '@helpers/datatime'
import commonStyle from '@styles/commonStyle'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  data: TPostType
  onPress: (route: string, id: number, type: string, name: string) => void
}

const NotificatioComponent = ({ data, onPress }: TProps) => {
  const { name, introduction, created_at: createdAt, id } = data

  const TYPE = 'Post'
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
          <Text style={styles.bottomText}>{converDate(createdAt)}</Text>
          <Text
            style={styles.bottomBtn}
            onPress={() => onPress('Details', id, TYPE, name)}
          >
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
    ...commonStyle.boxShadow,
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
    ...commonStyle.btn,
    color: ENUM_COLOR.mainColor,
  },
})
