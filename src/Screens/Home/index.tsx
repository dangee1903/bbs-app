import EventComponent from '@components/EventComponent'
import NotificatioComponent from '@components/NotificationComponent'
import MenuRequest from '@components/MenuRequest'
import { TEventType } from '@model/Event/EventType'
import { TPostType } from '@model/Post/PostType'
import { useGetEventQuery } from '@services/modules/event'
import { useGetPostQuery } from '@services/modules/post'
import commontStyle from '@styles/commont.style'
import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ModalRequest from '@components/Modal/ModalRequest'
import { TDataShow } from '@model/Request'

type TProps = {
  navigation: any
}

const Home = ({ navigation }: TProps) => {
  const { data: dataPost, refetch: refetchPost } = useGetPostQuery()
  const { data: dataEvent, refetch: refetchEvent } = useGetEventQuery()
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

  useEffect(() => {
    refetchPost()
    refetchEvent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          backgroundColor: 'white',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.homeContent}>
          <Text style={styles.contentHead}>Thông báo</Text>
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
