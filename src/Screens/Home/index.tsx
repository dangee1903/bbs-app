import { Box } from 'native-base'
import React from 'react'
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.notificationContent}>
        <Text style={styles.title}>Thông báo</Text>
        <View style={styles.content}>
          <Box>
            <Text>Lịch trực nhật tháng 8/2022</Text>
            <Text>
              Nhà sạch thì mát - Bát sạch ngon cơm Văn phòng không rác t...
            </Text>
            <View style={styles.bottom}>
              <Text>2022/07/06</Text>
              <Text>Detail</Text>
            </View>
          </Box>
        </View>
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  notificationContent: {
    padding: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#494949',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btn: {
    textTransform: 'uppercase',
  },
})
