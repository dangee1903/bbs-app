/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-duplicates */
import React from 'react'
import { Provider } from 'react-redux'
import store from '@store/index'
import { registerRootComponent } from 'expo'
import ApplicationNavigator from '@navigators/Application'

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  )
}

registerRootComponent(App)
