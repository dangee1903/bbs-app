/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useReduxSelector } from '@store/index'
import Login from '@screens/Login'
import Home from '@screens/Home'
import Setting from '@screens/Setting'
import Project from '@screens/Project'
import Github from '@screens/Github'
import Noti from '@screens/Noti'
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#6200EE',
        },
      }}
    >
      <Tab.Screen
        name="Project"
        component={Project}
        options={{
          tabBarIcon: () => <Ionicons name="flag" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Github"
        component={Github}
        options={{
          tabBarIcon: () => <AntDesign name="github" size={20} color="white" />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={26} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Noti"
        component={Noti}
        options={{
          tabBarIcon: () => (
            <Ionicons name="notifications" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <AntDesign name="setting" size={20} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const ApplicationNavigator = () => {
  const { login } = useReduxSelector(state => state.login)

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {login ? (
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator
