import EventComponent from '@components/EventComponent'
import NotificatioComponent from '@components/NotificationComponent'
import MenuRequest from '@components/MenuRequest'
import EventSekeleton from '@components/Sekeleton/EventSekeleton'
import NotificationSekeleton from '@components/Sekeleton/NotificationSekeleton'
import { TEventType } from '@model/Event/EventType'
import { TPostType } from '@model/Post/PostType'
import { useGetEventQuery } from '@services/modules/event'
import { useGetPostQuery } from '@services/modules/post'
import React, { useState } from 'react'
import commonStyle from '@styles/commonStyle'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ModalRequest from '@screens/Home/Modal/ModalRequest'
import { TDataShow } from '@model/Request'
import { ENUM_COLOR } from '@constants/enum'

type TProps = {
  navigation: any
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
