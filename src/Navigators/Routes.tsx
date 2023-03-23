/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '@components/CustomDrawer'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { SideBar } from '@components/SideBar'
import { ENUM_COLOR } from '@constants/enum'

const Drawer = createDrawerNavigator()

const Routers = () => {
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: ENUM_COLOR.mainColor,
        drawerActiveTintColor: ENUM_COLOR.white,
        drawerInactiveTintColor: ENUM_COLOR.black,
      }}
      useLegacyImplementation={false}
    >
      {SideBar.map(_ => {
        return (
          <Drawer.Screen
            key={_.label}
            name={_.route}
            component={_.component}
            options={{
              headerShown: _.showHeader,
              drawerIcon: props => _.icon(props.color),
              headerLeftLabelVisible: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: ENUM_COLOR.mainColor,
              },
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }
                    style={{ paddingLeft: 20 }}
                  >
                    <Ionicons name="menu" size={30} color={ENUM_COLOR.white} />
                  </TouchableOpacity>
                )
              },
              headerRight: () => {
                return (
                  <TouchableOpacity style={{ paddingRight: 20 }}>
                    <Ionicons
                      name="search"
                      size={24}
                      color={ENUM_COLOR.white}
                    />
                  </TouchableOpacity>
                )
              },
            }}
          />
        )
      })}
    </Drawer.Navigator>
  )
}

export default Routers
