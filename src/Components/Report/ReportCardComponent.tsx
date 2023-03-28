import { ENUM_COLOR } from '@constants/enum'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import commonStyle from '@styles/commonStyle'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type ItemProps = {
  title: string
  sender: string
  onPress: (route: string) => void
}

const ReportCard = ({ title, sender, onPress }: ItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress('ReportDetail')}
      style={styles.container}
      activeOpacity={0.6}
    >
      {/* <View style={styles.container} onTouchEnd={() => onPress('ReportDetail')}> */}
      <View style={styles.content}>
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/logo-og.png',
            }}
          />
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.sender} numberOfLines={1}>
            {sender}
          </Text>
        </View>
      </View>
      <View style={styles.expand}>
        <View style={styles.timeSection}>
          <MaterialCommunityIcons
            name="alarm"
            style={styles.timeIcon}
            size={18}
            color={ENUM_COLOR.black}
          />
          <Text style={styles.timeText}>2 Tuần Trước</Text>
        </View>
        <View style={styles.iconExpand}>
          <MaterialCommunityIcons
            name="chevron-down"
            style={styles.iconExpand}
            size={18}
            color={ENUM_COLOR.black}
          />
        </View>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  )
}

export default ReportCard

const styles = StyleSheet.create({
  container: {
    ...commonStyle.boxShadowAll,
    padding: 8,
    marginVertical: 8,
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
  },
  imageSection: {
    width: '15%',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  image: {
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: 50,
    // marginBottom: 20,
  },
  titleSection: {
    // width: %',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sender: {},
  expand: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  timeIcon: {
    marginRight: 2,
  },
  timeText: {},
  iconExpand: {},
})
