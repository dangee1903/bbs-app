/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { tabArr } from '@components/Tab'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, Text } from 'react-native'

const Tab = createBottomTabNavigator()
export const TabHome = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#6200EE',
        },
        unmountOnBlur: true,
      }}
    >
      {tabArr.map(_ => {
        return (
          <Tab.Screen
            key={_.label}
            name={_.route}
            component={_.component}
            options={{
              headerShown: _.showHeader,
              tabBarIcon: () => _.icon,
              headerLeftLabelVisible: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: '#6200EE',
              },
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }
                    style={{ paddingLeft: 20 }}
                  >
                    <Ionicons name="menu" size={30} color="white" />
                  </TouchableOpacity>
                )
              },
              headerRight: () => {
                return (
                  <TouchableOpacity style={{ paddingRight: 20 }}>
                    <Ionicons name="search" size={24} color="white" />
                  </TouchableOpacity>
                )
              },
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}
