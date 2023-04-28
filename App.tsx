/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { registerRootComponent } from 'expo'
import ApplicationNavigator from '@navigators/Application'
import { NativeBaseProvider } from 'native-base'
import {
  DefaultTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import 'expo-dev-menu'
import ToastError from '@components/ToastError'
import ToastCommon from '@components/Common/ToastCommon'
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types'
import '@constants/configLocaleDatePicker'
import { Alert, PermissionsAndroid, Platform } from 'react-native'
import messaging from '@react-native-firebase/messaging'

const requestNotificationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera')
    } else {
      console.log('Camera permission denied')
    }
  } catch (err) {
    console.warn(err)
  }
}

const theme: ThemeProp | undefined = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...MD3LightTheme.colors,
  },
}

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
}

export default function App() {
  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     requestNotificationPermission()
  //   }
  // }, [])
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage))
  //   })

  //   return unsubscribe
  // }, [])
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PaperProvider theme={theme}>
          <ToastError>
            <ApplicationNavigator />
          </ToastError>
          <ToastCommon />
        </PaperProvider>
      </NativeBaseProvider>
    </Provider>
  )
}

registerRootComponent(App)
