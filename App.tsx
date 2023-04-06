/* eslint-disable react/function-component-definition */
import React from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { registerRootComponent } from 'expo'
import ApplicationNavigator from '@navigators/Application'
import { NativeBaseProvider } from 'native-base'
import { Provider as PaperProvider } from 'react-native-paper'
import 'expo-dev-menu'
import ToastError from '@components/ToastError'
import ToastCommon from '@components/Common/ToastCommon'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <PaperProvider>
          <ToastError>
            <ApplicationNavigator />
          </ToastError>
          <ToastCommon position="top" />
        </PaperProvider>
      </NativeBaseProvider>
    </Provider>
  )
}

registerRootComponent(App)
