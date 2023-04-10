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
import ToastError from '@components/ToastError'
import ToastCommon from '@components/Common/ToastCommon'
import { ThemeProp } from 'react-native-paper/lib/typescript/src/types'
import '@formatjs/intl-getcanonicallocales/polyfill'
import '@formatjs/intl-locale/polyfill'
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/vi'
import '@formatjs/intl-displaynames/polyfill'
import '@formatjs/intl-displaynames/locale-data/vi'
import '@formatjs/intl-listformat/polyfill'
import '@formatjs/intl-listformat/locale-data/vi'
import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/locale-data/vi'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/locale-data/vi'
import '@formatjs/intl-datetimeformat/polyfill'
import '@formatjs/intl-datetimeformat/locale-data/vi'
import '@formatjs/intl-datetimeformat/add-golden-tz'

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
