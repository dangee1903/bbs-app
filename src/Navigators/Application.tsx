import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from '@screens/Details'
import Home from '@screens/Home'
import Login from '@screens/Login'
import ReportCreate from '@screens/Project/Create'
import DetailReport from '@screens/Project/Details'
import { useReduxSelector } from '@store/index'
import * as React from 'react'
import Routers from './Routes'
import { navigationRef } from './utils'

const Stack = createNativeStackNavigator()

const ApplicationNavigator = () => {
  const { login } = useReduxSelector(state => state.login)
  const nav = () => navigationRef.current

  // eslint-disable-next-line react/no-unstable-nested-components, react/jsx-props-no-spreading
  const YourComponent = (props: any) => <Routers {...props} nav={nav} />

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
              component={YourComponent}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="Details"
              component={Details}
              options={({ route }: any) => ({ title: route?.params?.name })}
            />
            <Stack.Screen
              name="ReportDetail"
              component={DetailReport}
              options={({ route }: any) => ({ title: 'Chi tiết báo cáo' })}
            />
            <Stack.Screen
              name="ReportCreate"
              component={ReportCreate}
              options={({ route }: any) => ({ title: 'Tạo báo cáo mới' })}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator
