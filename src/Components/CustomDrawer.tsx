/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'
import { useReduxDispatch, useReduxSelector } from '@store/index'
import { clear } from '@store/loginReducer'
import { removeToken } from '@helpers/token'
import { ENUM_COLOR } from '@constants/enum'
import { Avatar, Divider } from 'react-native-paper'

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
    dispatch(clear())
  }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: ENUM_COLOR.white }}
      >
        <View style={{ flex: 1, flexDirection: 'row-reverse', marginLeft: 10 }}>
          <AntDesign
            onPress={() => props.navigation.closeDrawer()}
            name="close"
            size={24}
            color={ENUM_COLOR.mainColor}
          />
        </View>
        <View style={{ padding: 20 }}>
          <Avatar.Image
            size={80}
            style={{ backgroundColor: ENUM_COLOR.white, marginBottom: 10 }}
            source={image}
          />
          <Text
            style={{
              color: ENUM_COLOR.black,
              fontSize: 22,
              marginBottom: 5,
            }}
          >
            {data.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: ENUM_COLOR.black,
                marginRight: 5,
              }}
            >
              {data.job_name}
            </Text>
            <Text
              style={{
                color: ENUM_COLOR.black,
                marginRight: 5,
              }}
            >
              {data.team.name}
            </Text>
          </View>
        </View>
        <Divider />
        <View
          style={{ flex: 1, backgroundColor: ENUM_COLOR.white, paddingTop: 10 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: ENUM_COLOR.grayBordor,
        }}
      >
        <TouchableOpacity
          onPress={handleSignOut}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
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
