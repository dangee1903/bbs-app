/* eslint-disable react/react-in-jsx-scope */
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Github from '@screens/Github'
import Home from '@screens/Home'
import Noti from '@screens/Noti'
import Project from '@screens/Project'
import Setting from '@screens/Setting'

export const tabArr = [
  {
    route: 'Project',
    label: 'Project',
    icon: <Ionicons name="flag" size={20} color="white" />,
    component: Project,
    showHeader: true,
  },
  {
    route: 'Github',
    label: 'Github',
    icon: <AntDesign name="github" size={20} color="white" />,
    component: Github,
    showHeader: true,
  },
  {
    route: 'Home',
    label: 'Home',
    icon: <MaterialIcons name="home" size={26} color="white" />,
    component: Home,
    showHeader: true,
  },
  {
    route: 'Noti',
    label: 'Noti',
    icon: <Ionicons name="notifications" size={20} color="white" />,
    component: Noti,
    showHeader: true,
  },
  {
    route: 'Setting',
    label: 'Setting',
    icon: <AntDesign name="setting" size={20} color="white" />,
    component: Setting,
    showHeader: true,
  },
]
