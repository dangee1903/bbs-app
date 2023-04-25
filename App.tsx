/* eslint-disable react/function-component-definition */
import React from 'react'
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
import ToastError from '@components/Common/ToastError'
import ToastCommon from '@components/Common/ToastCommon'
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types'
import '@constants/configLocaleDatePicker'

const theme: ThemeProp | undefined = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...MD3LightTheme.colors,
  },
}

export default function App() {
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
