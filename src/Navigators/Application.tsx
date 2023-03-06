import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useReduxSelector } from '@store/index'
import Login from '@screens/Login'
import Home from '@screens/Home'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator()

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
              name="Home"
              component={Home}
              options={{ headerShown: true }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator
