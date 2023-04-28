/* eslint-disable react/react-in-jsx-scope */
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Github from '@screens/Github'
import HomeStack from '@screens/HomeStack/HomeStack'
import Noti from '@screens/Noti'
import Project from '@screens/Project'
import Setting from '@screens/Setting'

export const TabArr = [
  {
    route: 'Project',
    label: 'Project',
    icon: (color: string) => <Ionicons name="flag" size={20} color={color} />,
    component: Project,
    showHeader: true,
  },
  {
    route: 'Github',
    label: 'Github',
    icon: (color: string) => (
      <AntDesign name="github" size={20} color={color} />
    ),
    component: Github,
    showHeader: true,
  },
  {
    route: 'HomeStack',
    label: 'HomeStack',
    icon: (color: string) => (
      <MaterialIcons name="home" size={26} color={color} />
    ),
    component: HomeStack,
    showHeader: true,
  },
  {
    route: 'Noti',
    label: 'Noti',
    icon: (color: string) => (
      <Ionicons name="notifications" size={20} color={color} />
    ),
    component: Noti,
    showHeader: true,
  },
  {
    route: 'Setting',
    label: 'Setting',
    icon: (color: string) => (
      <AntDesign name="setting" size={20} color={color} />
    ),
    component: Setting,
    showHeader: true,
  },
]
