/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-duplicates */
import React from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { registerRootComponent } from 'expo'
import ApplicationNavigator from '@navigators/Application'
import { NativeBaseProvider } from 'native-base'
import 'expo-dev-menu'

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <ApplicationNavigator />
      </NativeBaseProvider>
    </Provider>
  )
}

registerRootComponent(App)
