import EventComponent from '@components/EventComponent'
import NotificatioComponent from '@components/NotificationComponent'
import MenuRequest from '@components/MenuRequest'
import EventSekeleton from '@components/Sekeleton/EventSekeleton'
import NotificationSekeleton from '@components/Sekeleton/NotificationSekeleton'
import { TEventType } from '@model/Event/EventType'
import { TPostType } from '@model/Post/PostType'
import { useGetEventQuery } from '@services/modules/event'
import { useGetPostQuery } from '@services/modules/post'
import React, { useEffect, useRef, useState } from 'react'
import commonStyle from '@styles/commonStyle'
import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ModalRequest from '@screens/Home/Modal/ModalRequest'
import { TDataShow } from '@model/Request'
import { ENUM_COLOR } from '@constants/enum'
import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'

type TProps = {
  navigation: any
}
async function sendPushNotification(expoPushToken: any) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  }
  console.log(expoPushToken, 'expoPushToken')

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })
}

async function registerForPushNotificationsAsync() {
  let token
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    // let finalStatus = existingStatus
    console.log(existingStatus, 'existingStatus')
    // if (existingStatus !== 'granted') {
    //   const { status } = await Notifications.requestPermissionsAsync()
    //   console.log(status, 'status')
    //   finalStatus = status
    // }
    // if (finalStatus !== 'granted') {
    //   alert('Failed to get push token for push notification!')
    //   return
    // }
    token = (await Notifications.getExpoPushTokenAsync()).data
    console.log(token, 'token')
  } else {
    alert('Must use physical device for Push Notifications')
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    })
  }

  // eslint-disable-next-line consistent-return
  return token
}

const Home = ({ navigation }: TProps) => {
  const { data: dataPost, isLoading: loadingPost } = useGetPostQuery()
  const { data: dataEvent, isLoading: loadingEvent } = useGetEventQuery()
  const [showMenu, setShowMenu] = useState(false)
  const [showModalRequest, setShowModalRequest] = useState(false)
  const [dataShow, setDataShow] = useState<TDataShow>({
    reason: false,
    date: false,
    time: false,
    checkboxTime: false,
    checkBoxSession: false,
    permission_type: '0',
  })

  const onPress = (
    routeName: string,
    itemId: number,
    type: string,
    name: string,
  ) => {
    navigation.navigate(routeName, {
      id: itemId,
      type,
      name,
    })
  }

  const openMenu = () => {
    setShowMenu(true)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  const handleShowModalRequest = (active: boolean) => {
    setShowModalRequest(active)
    closeMenu()
  }

  const [expoPushToken, setExpoPushToken] = useState<any>('')
  const [notification, setNotification] = useState<any>(false)
  const notificationListener = useRef<any>()
  const responseListener = useRef<any>()

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token))

    notificationListener.current =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Notifications.addNotificationReceivedListener((notifica: any) => {
        console.log(notifica, 'notifica')
        setNotification(notifica)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response)
      })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: ENUM_COLOR.white,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContent}>
          <Text style={styles.contentHead}>Thông báo</Text>
          {loadingPost &&
            // eslint-disable-next-line react/no-array-index-key
            [...Array(3)].map((x, i) => <NotificationSekeleton key={i} />)}
          {dataPost?.data?.posts &&
            dataPost?.data?.posts
              .slice(0, 3)
              .map((item: TPostType) => (
                <NotificatioComponent
                  key={item.id}
                  data={item}
                  onPress={onPress}
                />
              ))}
          <Text style={styles.contentHead}>Sự kiện</Text>
          {loadingEvent &&
            // eslint-disable-next-line react/no-array-index-key
            [...Array(3)].map((x, i) => <EventSekeleton key={i} />)}
          {dataEvent?.data?.events &&
            dataEvent?.data?.events
              .slice(0, 3)
              .map((item: TEventType) => (
                <EventComponent key={item.id} data={item} onPress={onPress} />
              ))}
        </View>
        <Text>
          Your expo push token:
          {expoPushToken}
        </Text>
        <Button
          title="Press to Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken)
          }}
        />
      </ScrollView>
      <MenuRequest
        openMenu={openMenu}
        showMenu={showMenu}
        closeMenu={closeMenu}
        setShowModal={handleShowModalRequest}
        setDateShow={setDataShow}
      />
      <ModalRequest
        isShowModal={showModalRequest}
        setShowModal={handleShowModalRequest}
        dataShow={dataShow}
      />
    </>
  )
}
export default Home

const styles = StyleSheet.create({
  homeContent: {
    margin: 16,
    paddingBottom: 60,
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
    backgroundColor: ENUM_COLOR.mainColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 125,
    height: 48,
    borderRadius: 50,
  },
  btn: {
    ...commonStyle.btn,
    color: ENUM_COLOR.white,
    marginLeft: 17,
  },
})
