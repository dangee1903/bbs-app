/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '@screens/Details/DetailsScreen'
import Home from '@screens/Home'
import Login from '@screens/Login'
import { useReduxSelector } from '@store/index'
import * as React from 'react'
import Routers from './Routes'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator()

const ApplicationNavigator = () => {
  const { login } = useReduxSelector(state => state.login)

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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({ route }: any) => ({ title: route?.params?.name })}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator
