/* eslint-disable camelcase */
import { converDate } from '@helpers/datatime'
import { TEventType } from '@model/Event/EventType'
import commonStyle from '@styles/commonStyle'
import React from 'react'
import { Image, Platform, Share, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Button } from 'react-native-paper'
import { ENUM_COLOR } from '@constants/enum'
import { convertUrl } from '@helpers/url'

type TProps = {
  data: TEventType
  onPress: (route: string, id: number, type: string, name: string) => void
}

const EventComponent = ({ data, onPress }: TProps) => {
  const TYPE = 'Event'
  const { name, created_at: createdAt, introduction, id, image_url } = data

  const handleShare = () => {
    Share.share({
      message:
        Platform.OS === 'android'
          ? convertUrl(`/detail/${id}`, process.env.WEB_URL)
          : introduction,
      title: name,
      url: convertUrl(`/detail/${id}`, process.env.WEB_URL),
    })
  }

  return (
    <View style={styles.containerContent}>
      <View style={styles.contentTop}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://jvb-corp.com/img/logo.png',
          }}
        />
        <View style={styles.title}>
          <Text style={styles.contentTopTitle} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.contentTopDate}>{converDate(createdAt)}</Text>
        </View>
        <Button style={styles.shareBtn} onPress={handleShare}>
          <MaterialIcons name="share" size={20} color={ENUM_COLOR.mainColor} />
        </Button>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.contentImage}
          source={{
            uri: convertUrl(image_url),
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
          XEM CHI TIẾT
        </Text>
        <Text style={styles.bottomBtn}>THAM GIA</Text>
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
  shareBtn: {
    marginLeft: 15,
  },
})
