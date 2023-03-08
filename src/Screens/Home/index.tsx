import EventComponent from '@components/EventComponent'
import NotificatioComponent from '@components/NotificationComponent'
import { TEventType } from '@model/Event/EventType'
import { TNotificationType } from '@model/Post/NotificationType'
import { useGetEventQuery } from '@services/modules/event'
import { useGetPostQuery } from '@services/modules/post'
import commontStyle from '@styles/commont.style'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const Home = () => {
  const { data: dataPost } = useGetPostQuery()
  const { data: dataEvent } = useGetEventQuery()

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.homeContent}>
        <Text style={styles.contentHead}>Thông báo</Text>
        {dataPost.data.posts.slice(0, 3).map((item: TNotificationType) => (
          <NotificatioComponent
            key={item.id}
            id={item.id}
            name={item.name}
            introduction={item.introduction}
            createdAt={item.created_at}
          />
        ))}
        <Text style={styles.contentHead}>Sự kiện</Text>
        {dataEvent.data.events.slice(0, 3).map((item: TEventType) => (
          <EventComponent
            key={item.id}
            id={item.id}
            name={item.name}
            introduction={item.introduction}
            createdAt={item.created_at}
          />
        ))}
      </View>
      {/* BTN CREATE. Wait api */}
      {/* <View style={styles.createButton}>
        <View style={styles.createBtn}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.btn}>Create</Text>
        </View>
      </View> */}
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  homeContent: {
    margin: 16,
  },
  contentHead: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: '#494949',
    marginBottom: 5,
    marginLeft: 5,
  },
  createButton: {
    position: 'absolute',
    bottom: 20,
    right: 0,
  },
  createBtn: {
    backgroundColor: '#6200EE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 48,
    borderRadius: 50,
  },
  btn: {
    ...commontStyle.btn,
    color: '#FFFFFF',
    marginLeft: 17,
  },
})
