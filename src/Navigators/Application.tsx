/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useReduxSelector } from '@store/index'
import Login from '@screens/Login'
import ListStaff from '@screens/ListStaff'
import { navigationRef } from './utils'
import Routers from './Routes'

const Stack = createNativeStackNavigator()

const ApplicationNavigator = () => {
  const { login } = useReduxSelector(state => state.login)
  console.log(login, 'login')

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {!login ? (
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
              options={{ headerShown: false }}
              name="Routes"
              component={Routers}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator
