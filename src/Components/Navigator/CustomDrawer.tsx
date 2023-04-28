/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons'
import { useReduxDispatch, useReduxSelector } from '@store/index'
import { clear } from '@store/loginReducer'
import { removeToken } from '@helpers/token'
import { ENUM_COLOR } from '@constants/enum'
import { Avatar, Divider } from 'react-native-paper'
import { convertUrl } from '@helpers/url'
import { SideBar } from './SideBar'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomDrawer = (props: any) => {
  const { data } = useReduxSelector(state => state.login.user)
  const dispatch = useReduxDispatch()
  const currentRouteName = props.nav()?.getCurrentRoute().name

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
            source={{ uri: convertUrl(data.avatar) }}
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
          {SideBar.map(_ => {
            const focusedRouteItem = SideBar.find(
              r => r.key === currentRouteName,
            )
            const focused = focusedRouteItem
              ? _.key === focusedRouteItem?.key
              : _.key === 'HomeStack'
            return (
              <DrawerItem
                key={_.key}
                label={() => (
                  <Text
                    style={[
                      styles.drawerItem,
                      focused ? styles.drawerItemFocused : null,
                    ]}
                  >
                    {_.label}
                  </Text>
                )}
                onPress={() => props.navigation.navigate(_.key)}
                icon={() =>
                  _.icon(focused ? ENUM_COLOR.white : ENUM_COLOR.black)
                }
                style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
              />
            )
          })}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: ENUM_COLOR.grayBorder,
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
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  drawerLabelFocused: {
    backgroundColor: ENUM_COLOR.mainColor,
  },
  drawerLabel: {
    backgroundColor: ENUM_COLOR.white,
  },
  drawerItemFocused: {
    color: ENUM_COLOR.white,
  },
  drawerItem: {},
})
