/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { TabArr } from '@components/Navigator/Tab'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { ENUM_COLOR, ENUM_COLOR_TAB_BAR } from '@constants/enum'

const Tab = createBottomTabNavigator()
export const TabHome = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: ENUM_COLOR.mainColor,
        },
        unmountOnBlur: true,
        tabBarActiveTintColor: ENUM_COLOR_TAB_BAR.active,
        tabBarInactiveTintColor: ENUM_COLOR_TAB_BAR.inActive,
      }}
    >
      {TabArr.map(_ => {
        return (
          <Tab.Screen
            key={_.label}
            name={_.route}
            component={_.component}
            options={{
              headerShown: _.showHeader,
              tabBarIcon: (props: {
                focused: boolean
                color: string
                size: number
              }) => {
                return _.icon(props.color)
              },
              headerLeftLabelVisible: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: ENUM_COLOR.mainColor,
              },
              headerLeft: () => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.dispatch(DrawerActions.openDrawer())
                    }
                    style={{ paddingLeft: 20 }}
                  >
                    <Ionicons name="menu" size={30} color={ENUM_COLOR.white} />
                  </TouchableOpacity>
                )
              },
              headerRight: () => {
                return (
                  <TouchableOpacity style={{ paddingRight: 20 }}>
                    <Ionicons
                      name="search"
                      size={24}
                      color={ENUM_COLOR.white}
                    />
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
