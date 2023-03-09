/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'
import { useReduxDispatch, useReduxSelector } from '@store/index'
import { clear } from '@store/loginReducer'
import { removeToken } from '@helpers/token'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const [image, setImage] = useState({ uri: '/dist/img/no-avatar.png' })
  const { data } = useReduxSelector(state => state.login.user)
  const dispatch = useReduxDispatch()

  useEffect(() => {
    setImage(pre => ({
      ...pre,
      uri: process.env.BASE_URL + data.avatar,
    }))
  }, [data.avatar])

  const handleSignOut = async () => {
    await removeToken()
    dispatch(clear)
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#6200EE' }}
      >
        <View style={{ flex: 1, flexDirection: 'row-reverse', marginLeft: 5 }}>
          <AntDesign
            onPress={() => props.navigation.closeDrawer()}
            name="close"
            size={24}
            color="white"
          />
        </View>
        <View style={{ padding: 20 }}>
          <Image
            // eslint-disable-next-line global-require, import/extensions
            source={image}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              backgroundColor: '#fff',
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              marginBottom: 5,
            }}
          >
            {data.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}
            >
              {data.job_name}
            </Text>
            <Text
              style={{
                color: '#fff',
                marginRight: 5,
              }}
            >
              {data.team.name}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* <Ionicons name="exit-outline" size={22} /> */}
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
              onPress={handleSignOut}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer
