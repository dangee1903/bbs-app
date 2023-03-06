import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { boxShadow } from '../styles/commont.style'

const NotificatioComponent = () => {
  return (
    <View style={styles.containerContent}>
      <View>
        <Text style={styles.contentTitle}>Lịch trực nhật tháng 8/2022</Text>
        <Text style={styles.contentText}>
          Nhà sạch thì mát - Bát sạch ngon cơm Văn phòng không rác t...
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>2022/07/06</Text>
          <Text style={styles.bottomBtn}>Detail</Text>
        </View>
      </View>
    </View>
  )
}

export default NotificatioComponent

const styles = StyleSheet.create({
  containerContent: {
    padding: 16,
    // borderRadius: 4,
    // borderBottomWidth: 4,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderColor: 'rgba(0, 0, 0, 0.08)',
    // marginBottom: 16,
    ...boxShadow,
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
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#6200EE',
  },
})
