import EventComponent from '@components/EventComponent'
import NotificatioComponent from '@components/NotificationComponent'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.notificationContent}>
        <Text style={styles.contentHead}>Thông báo</Text>
        <NotificatioComponent />
        <Text style={styles.contentHead}>Sự kiện</Text>
        <EventComponent />
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  notificationContent: {
    padding: 16,
  },
  contentHead: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#494949',
    marginBottom: 5,
    marginLeft: 5,
  },
})
